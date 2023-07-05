var pkg1 = NestThermostat.awayFromHome.HomeName;
var pkg2 = NestThermostat.awayFromHome.SetAt;
var event = "Away";

var tt = Meta.triggerTime.format();
GoogleCalendar.addDetailedEvent.setStartTime(tt);
GoogleCalendar.addDetailedEvent.setEndTime(tt);
GoogleCalendar.addDetailedEvent.setDescription("" + pkg1 + " set to " + event + ".  setAt:" + pkg2 + " currentUserTime:" + Meta.currentUserTime.format() + " triggerTime:" + tt);
