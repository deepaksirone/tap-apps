  var minute = Meta.triggerTime.minute()
var minuteString = minute.toString()
var runday = Meta.triggerTime.day()
var currentdate = new Date(LinkMyPet.collarInfo.CreatedAt).getDay()

var batteryAmount =  parseInt(LinkMyPet.collarInfo.Battery, 10);
if(minute%30 > 0 && batteryAmount < 100 || (currentdate != runday) )
  Sms.sendMeText.skip()
