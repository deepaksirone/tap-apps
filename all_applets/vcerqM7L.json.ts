var hour = Meta.triggerTime.hour()
var minute = Meta.triggerTime.minute()
var timeHour = 24

if(hour%timeHour > 0 && minute == 0)
  GoogleDocs.appendToGoogleDoc.skip()