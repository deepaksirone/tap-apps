var event = "Home";

var tt = Meta.triggerTime.format();
GoogleCalendar.addDetailedEvent.setStartTime(tt);
GoogleCalendar.addDetailedEvent.setEndTime(tt);
GoogleCalendar.addDetailedEvent.setDescription("" + NestThermostat.homeFromAway.HomeName + " set to " + event + ".  setAt:" + NestThermostat.homeFromAway.SetAt + " currentUserTime:" + Meta.currentUserTime.format() + " triggerTime:" + tt);
