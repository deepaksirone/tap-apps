var hour = Meta.triggerTime.hour()
var hourString = hour.toString()



if(hour%24 > 0 )
  GoogleSheets.appendToGoogleSpreadsheet.skip()