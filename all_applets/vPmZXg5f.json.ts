var pkg = NestThermostat.homeFromAway;
var event = "Home";

var tt = Meta.triggerTime.format();
GoogleCalendar.addDetailedEvent.setStartTime(tt);
GoogleCalendar.addDetailedEvent.setEndTime(tt);
GoogleCalendar.addDetailedEvent.setDescription("" + pkg.HomeName + " set to " + event + ".  setAt:" + pkg.SetAt + " currentUserTime:" + Meta.currentUserTime.format() + " triggerTime:" + tt);