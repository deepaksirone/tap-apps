let sunrise = moment(Weather.currentWeather.SunriseAt);
let sunset = moment(Weather.currentWeather.SunsetAt);
let currentTime = Meta.currentUserTime;
let afterSunrise = currentTime.isAfter(sunrise);
let beforeSunset = currentTime.isBefore(sunset);
 if (afterSunrise && beforeSunset) {
   WemoLightSwitch.attributeLsOnDiscrete.skip(`Its still daytime so we're leaving the lights off`);
}
