var hour=Meta.triggerTime.hour()
if(hour<16)
{
  NestThermostat.setTemperature.skip("As your system is disarmed before 4 PM, your thermostat is not notified.")
}
else if(hour>19)
{
  NestThermostat.setTemperature.skip("As your system is disarmed after 7 PM, your thermostat is not notified.")
}