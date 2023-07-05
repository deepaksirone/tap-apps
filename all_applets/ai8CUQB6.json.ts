var temp     = parseInt(Weather.currentWeatherAtTime.HighTempFahrenheit)
var tempround = ((Math.round(temp / 10) * 10))
var colorKey = tempround.toString()

var colors: {[key:string]:string} = {
  "0":"#0000FF",
  "10":"#1900E5",  
  "20":"#3300CC",
  "30":"#4C00B2",  
  "40":"#660099",
  "50":"#7F007F",  
  "60":"#990066",
  "70":"#B2004C",  
  "80":"#CC0033",
  "90":"#E50019",
  "100":"#FF0000"    
}

if (tempround < 0) {

  Nanoleaf.colorNotificationRequest.setValue("#0000FF")

}

else if (temp < 100)  {
  Nanoleaf.colorNotificationRequest.setValue(colors[colorKey])  
}

else {
  Nanoleaf.colorNotificationRequest.setValue("#FF0000")
}