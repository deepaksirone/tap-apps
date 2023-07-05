var hightempcelsius = +Weather.currentWeatherAtTime.HighTempCelsius
if (hightempcelsius < -5)
{
Hue.setColorAllHue.setColor("#0008E8") //darkblue
}

if (hightempcelsius >= -5 && hightempcelsius < 5)
{
Hue.setColorAllHue.setColor("#02C8E8") //light blue
}

if (hightempcelsius >= 5 && hightempcelsius < 12)
{
Hue.setColorAllHue.setColor("#F5FFBD") //white blue
}

if (hightempcelsius >= 12 && hightempcelsius < 20)
{
  Hue.setColorAllHue.setColor("#EBC944") //light orange / yellow
}

if (hightempcelsius >= 20 && hightempcelsius < 30)
{
  Hue.setColorAllHue.setColor("#E88102") //orange
}

if (hightempcelsius > 30)
{
  Hue.setColorAllHue.setColor("#E80202") //dark red
}
