let weather = Weather.currentWeather.CurrentCondition.toLowerCase();
let notClear = ((weather.indexOf('sunny') === -1) && (weather.indexOf('clear') === -1) && (weather.indexOf('fair') === -1));
let sunrise = moment(Weather.currentWeather.SunriseAt);
let sunset = moment(Weather.currentWeather.SunsetAt);
let currentTime = Meta.currentUserTime;
let afterSunrise = currentTime.isAfter(sunrise);
let beforeSunset = currentTime.isBefore(sunset);
if (notClear) {
  IfNotifications.sendNotification.skip(`ISS passed overhead but you may not see it because it's ${weather}`);
} else if
 (afterSunrise && beforeSunset) {
   IfNotifications.sendNotification.skip(`ISS passes overhead but the sun is up so you won't spot it`);
}
