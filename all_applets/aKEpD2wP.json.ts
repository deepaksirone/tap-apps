var timeOfDay=Meta.currentUserTime.hour();

if (timeOfDay>5){
NetatmoSecurity.sethomeaway.skip();
}
if (timeOfDay>5){
NetatmoThermostat.setpointmodemanual.skip();
}
