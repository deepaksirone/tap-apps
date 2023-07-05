//Specify variable and change string variable into a number
var HighTempCelsius = Number(Weather.currentWeatherAtTime.HighTempCelsius)

//purple is equal to or above 40C
if (HighTempCelsius >=40)  {
  Lifx.turnOn.setAdvancedOptions("color: purple")

//red is equal to or above 30C
} else if (HighTempCelsius >=30) {
  Lifx.turnOn.setAdvancedOptions("color: red")

//yellow is equal to or above 20C
} else if (HighTempCelsius >=20) {
  Lifx.turnOn.setAdvancedOptions("color: yellow")

//green is equal to or above 10C
} else if (HighTempCelsius >=10) {
  Lifx.turnOn.setAdvancedOptions("color:green")

//blue is equal to or above 3C
} else if (HighTempCelsius >=3) {
  Lifx.turnOn.setAdvancedOptions("color: blue")

//cyan is equal to or less than 2C
} else if (HighTempCelsius <=2) {
  Lifx.turnOn.setAdvancedOptions("color: cyan")
}
