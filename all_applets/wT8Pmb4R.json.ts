if (Date.parse(Meta.currentUserTime.utc().format()) < Date.parse(Weather.currentWeather[0].SunsetAt)) {
Lifx.turnOn.skip();
}