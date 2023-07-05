var condition = Weather.currentWeatherAtTime.TodaysCondition
if (condition.match(/thunderstorm/i))
{
  Hue.setColorAllHue.setColor("#AC62FF") //purple
}

if (condition.match(/cloud|mist|fog/i) ) 
{
  Hue.setColorAllHue.setColor("#B5C4FF") //light grey-blue
}

if (condition.match(/clear|sunny/i)) 
{
  Hue.setColorAllHue.setColor("#F9FF1D") // yellow
}

if (condition.match(/rain|drizzle|hail/i)) 
{
  Hue.setColorAllHue.setColor("#0004f4") //dark blue
}

if (condition.match(/snow|ice/i)) 
{
  Hue.setColorAllHue.setColor("#D0FEFF") //very light blue
}