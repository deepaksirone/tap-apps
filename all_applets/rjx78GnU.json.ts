var timeOfDay=Meta.currentUserTime.hour();

if (timeOfDay>8){
NetatmoThermostat.setpointmodemanual.skip();
}
if (timeOfDay>8){
TadoAirConditioning.startHeating.skip();
}