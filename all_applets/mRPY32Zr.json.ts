/* 
 The variable Weather.tomorrowsWeatherAtTime.LowTempFahrenheit is a string, so to do math with it we convert it to an integer using the function parseInt().
*/
// If tomorrow's low temperature is below 40º, skip this action.
if (parseInt(Weather.tomorrowsWeatherAtTime.LowTempFahrenheit) < 40) {
  GoogleCalendar.addDetailedEvent.skip();
}
// If tomorrow's low temperature is above 50º, skip this action.
if (parseInt(Weather.tomorrowsWeatherAtTime.LowTempFahrenheit) > 50) {
  GoogleCalendar.addDetailedEvent.skip();
}