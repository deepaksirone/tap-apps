var temp = NetatmoThermostat.getsetpointmanual.TemperatureSetpoint;
if (parseFloat(NetatmoThermostat.getsetpointmanual.TemperatureSetpoint) > 18 && parseFloat(NetatmoThermostat.getsetpointmanual.TemperatureSetpoint)<30){
  DaikinOnlineController.turnAcUnitOn.setSetpoint(temp);
  DaikinOnlineController.turnUnitOff.skip();
}else{
  DaikinOnlineController.turnAcUnitOn.skip();
}