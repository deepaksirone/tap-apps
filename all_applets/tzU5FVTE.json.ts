/*
 (c) 2011-2015, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun/moon position and light phases.
 https://github.com/mourner/suncalc
*/

var PI   = Math.PI,
    sin  = Math.sin,
    cos  = Math.cos,
    tan  = Math.tan,
    asin = Math.asin,
    atan = Math.atan2,
    acos = Math.acos,
    rad  = PI / 180;

// shortcuts for easier to read formulas

// sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas

// date/time constants and conversions

var dayMs = 1000 * 60 * 60 * 24,
    J1970 = 2440588,
    J2000 = 2451545;


function toJulian(date: any) { return date.valueOf() / dayMs - 0.5 + J1970; }

function fromJulian(j: any)  
{
   return new Date((j + 0.5 - J1970) * dayMs);
}


function toDays(date: any)   { return toJulian(date) - J2000; }



// general calculations for position

var e = rad * 23.4397; // obliquity of the Earth

function rightAscension(l: number, b: number) { return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l)); }
function declination(l: number, b: number)    { return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l)); }

function azimuth(H: number, phi: number, dec: number)  { return atan(sin(H), cos(H) * sin(phi) - tan(dec) * cos(phi)); }
function altitude(H: number, phi: number, dec: number) { return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(H)); }

function siderealTime(d: number, lw: number) { return rad * (280.16 + 360.9856235 * d) - lw; }

function astroRefraction(h: number) {
    if (h < 0) // the following formula works for positive altitudes only.
        h = 0; // if h = -0.08901179 a div/0 would occur.

    // formula 16.4 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
    // 1.02 / tan(h + 10.26 / (h + 5.10)) h in degrees, result in arc minutes -> converted to rad:
    return 0.0002967 / Math.tan(h + 0.00312536 / (h + 0.08901179));
}


// general sun calculations

function solarMeanAnomaly(d: any) { return rad * (357.5291 + 0.98560028 * d); }

function eclipticLongitude(M: any) {

    var C = rad * (1.9148 * sin(M) + 0.02 * sin(2 * M) + 0.0003 * sin(3 * M)), // equation of center
        P = rad * 102.9372; // perihelion of the Earth

    return M + C + P + PI;
}


function sunCoords(d: any) {

    var M = solarMeanAnomaly(d),
        L = eclipticLongitude(M);

    return {
        dec: declination(L, 0),
        ra: rightAscension(L, 0)
    };
}


var SunCalc;

// calculates sun position for a given date and latitude/longitude

function getPosition(date: any, lat: any, lng: any) {

    var lw  = rad * -lng,
        phi = rad * lat,
        d   = toDays(date),

        c  = sunCoords(d),
        H  = siderealTime(d, lw) - c.ra;

    return {
        azimuth: azimuth(H, phi, c.dec),
        altitude: altitude(H, phi, c.dec)
    };
};



// sun times configuration (angle, morning name, evening name)

var times =  [
    [-0.833, 'sunrise',       'sunset'      ],
    [  -0.3, 'sunriseEnd',    'sunsetStart' ],
    [    -6, 'dawn',          'dusk'        ],
    [   -12, 'nauticalDawn',  'nauticalDusk'],
    [   -18, 'nightEnd',      'night'       ],
    [     6, 'goldenHourEnd', 'goldenHour'  ]
];



// adds a custom time to the times config

function addTime (angle: any, riseName: any, setName: any) {
    times.push([angle, riseName, setName]);
};


// calculations for sun times

var J0 = 0.0009;

function julianCycle(d: any, lw: any) { return Math.round(d - J0 - lw / (2 * PI)); }

function approxTransit(Ht: any, lw: any, n: any) { return J0 + (Ht + lw) / (2 * PI) + n; }
function solarTransitJ(ds: any, M: any, L: any)  { return J2000 + ds + 0.0053 * sin(M) - 0.0069 * sin(2 * L); }

function hourAngle(h: any, phi: any, d: any) { return acos((sin(h) - sin(phi) * sin(d)) / (cos(phi) * cos(d))); }

// returns set time for the given sun altitude
function getSetJ(h: any, lw: any, phi: any, dec: any, n: any, M: any, L: any) {

    var w = hourAngle(h, phi, dec),
        a = approxTransit(w, lw, n);
    return solarTransitJ(a, M, L);
}


// calculates sun times for a given date and latitude/longitude

function getTimes(date: any, lat: any, lng: any) {

    var lw = rad * -lng,
        phi = rad * lat,

        d = toDays(date),
        n = julianCycle(d, lw),
        ds = approxTransit(0, lw, n),

        M = solarMeanAnomaly(ds),
        L = eclipticLongitude(M),
        dec = declination(L, 0),

         Jnoon = solarTransitJ(ds, M, L),

        sunset, sunrise,

        i, len, time, Jset, Jrise;

 
        Jset = getSetJ(-0.833 * rad, lw, phi, dec, n, M, L);
        Jrise = Jnoon - (Jset - Jnoon);

    var result = {
        solarNoon: fromJulian(Jnoon),
        nadir: fromJulian(Jnoon - 0.5),
        sunrise: fromJulian(Jrise),
        sunset: fromJulian(Jset)
    };


//    for (i = 0, len = times.length; i < len; i += 1) {
//        time = times[i];
//
//        Jset = getSetJ(time[0] * rad, lw, phi, dec, n, M, L);
//        Jrise = Jnoon - (Jset - Jnoon);
//
//        result[time[1]] = fromJulian(Jrise);
//        result[time[2]] = fromJulian(Jset);
//    }

    return result;
}

//////////////////////////////////////////////////////////
///// END SUNCALC LIBRARY  ///////////////////////////////
//////////////////////////////////////////////////////////


var time;

// Set Latitude and Longitude
var date = new Date(),
    latitude = 35.6225,
    longitude = -117.6709,
    minUntilSunset,
    minAfterSunrise,
    minPerHour = 60,    
    triggerActivityWindow = 60;


// Grab the time data from the API
time = getTimes(date, latitude, longitude);



// How many minutes until Sunset?
minUntilSunset = (time.sunset.getHours() * minPerHour)
    + time.sunset.getMinutes()
    - (date.getHours() * minPerHour)
    - date.getMinutes()
    ;

// How many minutes after Sunrise?
minAfterSunrise = (date.getHours() * minPerHour)
    + date.getMinutes()
    - (time.sunrise.getHours() * minPerHour)
    - time.sunrise.getMinutes()
    ;




// Sunset Logic
// If we're inside the trigger window AND it's still before sunset
if (minUntilSunset <= triggerActivityWindow  && minUntilSunset > 0)
{
    // We're inside Trigger window, 
    // Allow action to progress:-)
    var msg: any;

    msg = 'Less than one hour to Sunset, activating the Lutron Scene';
    IfNotifications.sendNotification.setMessage(msg);


}
else
{

  // We're not yet in the trigger window, or it's after sunset 
  // Don't trigger    :-(
    var msg: any;

    msg = 'More than one hour to Sunset, NOT activating the Lutron Scene';
    IfNotifications.sendNotification.setMessage(msg);


  LutronCasetaWireless.setScene.skip();
}