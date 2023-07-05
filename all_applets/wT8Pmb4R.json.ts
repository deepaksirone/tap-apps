if (Date.parse(Meta.currentUserTime.utc().format()) < Date.parse(Weather.currentWeather.SunsetAt)) {
Lifx.turnOn.skip();
}
