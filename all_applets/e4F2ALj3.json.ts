var hour=Meta.triggerTime.hour()
if(hour<7)
{
  NestThermostat.setTemperature.skip("As your system is armed before 7 AM, your thermostat is not notified.")
}
else if(hour>9)
{
  NestThermostat.setTemperature.skip("As your system is armed after 9 PM, your thermostat is not notified.")
}