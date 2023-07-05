if(Weather.currentWeatherAtTime.TodaysCondition.toLowerCase().indexOf("rain") == -1 && Weather.currentWeatherAtTime.TodaysCondition.toLowerCase().indexOf("thunderstorm") == -1 && Weather.currentWeatherAtTime.TodaysCondition.toLowerCase().indexOf("drizzle") == -1 && Weather.currentWeatherAtTime.TodaysCondition.toLowerCase().indexOf("snow") == -1 && Weather.currentWeatherAtTime.TodaysCondition.toLowerCase().indexOf("hail") == -1)
{
  IfNotifications.sendNotification.skip("Weather condition is " + Weather.currentWeatherAtTime.TodaysCondition);
}