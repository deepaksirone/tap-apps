////////////////////////Skip Action IFTTT Filter///////////////////////
///////////////////////////////////////////////////////////////////////
/////////////////////////////Bruno Leonardi////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////Sunset and Sunrise//////////////////////////
//aggiornato il 21/04/2018
///////////////////////////////////////////////////////////////////////
//////////////////////////////Settings/////////////////////////////////
///////////////////////////////////////////////////////////////////////

//fuso orario Italia GMT+2:00;
var GMT = +2.0;

// Offset +/-;
var Offset = +0.0;

// coordinate predefinite Italia (Roma);
var Latitude = 41.932623;
var Longitude = 12.531141;

//gradi (zenith) per il calcolo dell'orario alba/tramonto
//luce 50%
var Official = 90.8;
//luce 45%
var Civil = 96;
//luce 25%
var Nautical = 102;
//luce 5%
var Astronomical = 108;
//gradi impostati
var Zenith = Official;

///////////////////////////////////////////////////////////////////////
//////////////////////////////Sunrise//////////////////////////////////
///////////////////////////////////////////////////////////////////////

//grado d'arco della radiante
var Degree = Math.PI / 180;

//radiante del grado d'arco
var Radian = 180 / Math.PI;

//numero del giorno dell'anno
var YearFirstDay = Math.floor(new Date().setFullYear(new Date().getFullYear(), 0, 1) / 86400000);
var ToDay = Math.ceil((new Date().getTime()) / 86400000);
var Day = ToDay - YearFirstDay;

//conversione della longitudine in ore
var LongHour = Longitude / 15;

//calcolo approssimativo dell'orario alba/tramonto
var TimeApproximate = Day + ((6 - LongHour) / 24);

//calcolo dell'anomalia media del Sole
var SunMean = (0.9856 * TimeApproximate) - 3.289;

//calcolo della Longitudine reale del Sole
var SunTrueLongitude = SunMean + (1.916 * Math.sin(SunMean * Degree)) + (0.020 * Math.sin(2 * SunMean * Degree)) + 282.634;
if (SunTrueLongitude > 360) {SunTrueLongitude = SunTrueLongitude - 360;}
else if (SunTrueLongitude < 0) {SunTrueLongitude = SunTrueLongitude + 360;}

//calcolo dell'Ascensione Retta del Sole
var SunRightAscension = Radian * Math.atan(0.91764 * Math.tan(SunTrueLongitude * Degree));
if (SunRightAscension > 360) {SunRightAscension = SunRightAscension - 360;}
else if (SunRightAscension < 0) {SunRightAscension = SunRightAscension + 360;}

//L'Ascensione Retta deve essere nello stesso quadrante della Longitudine
var  LQuadrant = (Math.floor(SunTrueLongitude / (90))) * 90;
var  RAQuadrant = (Math.floor(SunRightAscension / 90)) * 90;
SunRightAscension = SunRightAscension + (LQuadrant - RAQuadrant);

//Il valore di Ascensione Retta deve essere convertito in ore
SunRightAscension = SunRightAscension / 15;

//Calcolo della declinazione del Sole
var DeclinationSin = 0.39782 * Math.sin(SunTrueLongitude * Degree);
var DeclinationCos = Math.cos(Math.asin(DeclinationSin));

//Calcola l'angolo orario locale del Sole
var CosH = (Math.cos(Zenith * Degree) - (DeclinationSin * Math.sin(Latitude * Degree))) / (DeclinationCos * Math.cos(Latitude * Degree));

//calcolo l'orario di alba/tramonto
var HourSun = (360 - Radian * Math.acos(CosH)) / 15;

//calcolo l'orario medio locale di alba/tramonto
var LocalMeanTime = HourSun + SunRightAscension - (0.06571 * TimeApproximate) - 6.622;

//converto l'orario da GMT a fuso orario locale e l'Offset
var LocalTime = LocalMeanTime - LongHour + GMT + Offset;
if (LocalTime > 24) {LocalTime = LocalTime - 24;}
else if (LocalTime < 0) {LocalTime = LocalTime + 24;}

//data e ora evento
var TriggerEvent = new Date();

//data e ora evento alba/tramonto
var Ms = new Date(TriggerEvent.getFullYear(), TriggerEvent.getMonth(), TriggerEvent.getDate()).getTime() + (LocalTime * 3600 * 1000);

//orario dell'alba
var Sunrise = new Date(Ms);

///////////////////////////////////////////////////////////////////////
//////////////////////////////Sunset///////////////////////////////////
///////////////////////////////////////////////////////////////////////

//calcolo approssimativo dell'orario alba/tramonto
TimeApproximate = Day + ((18 - LongHour) / 24);

//calcolo dell'anomalia media del Sole
SunMean = (0.9856 * TimeApproximate) - 3.289;

//calcolo della Longitudine reale del Sole
SunTrueLongitude = SunMean + (1.916 * Math.sin(SunMean * Degree)) + (0.020 * Math.sin(2 * SunMean * Degree)) + 282.634;
if (SunTrueLongitude > 360) {SunTrueLongitude = SunTrueLongitude - 360;}
else if (SunTrueLongitude < 0) {SunTrueLongitude = SunTrueLongitude + 360;}

//calcolo dell'Ascensione Retta del Sole
SunRightAscension = Radian * Math.atan(0.91764 * Math.tan(SunTrueLongitude * Degree));
if (SunRightAscension > 360) {SunRightAscension = SunRightAscension - 360;}
else if (SunRightAscension < 0) {SunRightAscension = SunRightAscension + 360;}

//L'Ascensione Retta deve essere nello stesso quadrante della Longitudine
LQuadrant = (Math.floor(SunTrueLongitude / (90))) * 90;
RAQuadrant = (Math.floor(SunRightAscension / 90)) * 90;
SunRightAscension = SunRightAscension + (LQuadrant - RAQuadrant);

//Il valore di Ascensione Retta deve essere convertito in ore
SunRightAscension = SunRightAscension / 15;

//Calcolo della declinazione del Sole
DeclinationSin = 0.39782 * Math.sin(SunTrueLongitude * Degree);
DeclinationCos = Math.cos(Math.asin(DeclinationSin));

//Calcola l'angolo orario locale del Sole
CosH = (Math.cos(Zenith * Degree) - (DeclinationSin * Math.sin(Latitude * Degree))) / (DeclinationCos * Math.cos(Latitude * Degree));

//calcolo l'orario di alba/tramonto
HourSun = (Radian * Math.acos(CosH)) / 15;

//calcolo l'orario medio locale di alba/tramonto
LocalMeanTime = HourSun + SunRightAscension - (0.06571 * TimeApproximate) - 6.622;

//calcolo l'orario da GMT a fuso orario locale e l'Offset
LocalTime = LocalMeanTime - LongHour + GMT + Offset;
if (LocalTime > 24) {LocalTime = LocalTime - 24;}
else if (LocalTime < 0) {LocalTime = LocalTime + 24;}

//data e ora evento tramonto
var Ms = new Date(TriggerEvent.getFullYear(), TriggerEvent.getMonth(), TriggerEvent.getDate()).getTime() + (LocalTime * 3600 * 1000);

//data e ora tramonto
var Sunset = new Date(Ms);

///////////////////////////////////////////////////////////////////////
///////////////////////////Sunset and Sunrise//////////////////////////
///////////////////////////////////////////////////////////////////////

//orario corrente del trigger
var TimeOfDay = Meta.currentUserTime.hour();

//se è giorno allora Skip Action
if (TimeOfDay > Sunrise.getHours() && TimeOfDay < Sunset.getHours()) {
  Hue.setScene.skip()
}