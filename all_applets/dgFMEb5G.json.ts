var minute = Meta.triggerTime.minute()
var minuteString = minute.toString()
var runday = Meta.triggerTime.day()
var currentdate = new Date(LinkMyPet.collarInfo.CreatedAt).getDay()

var tempAmount =  parseInt(LinkMyPet.collarInfo.Temperature, 10);
if(minute%30 > 0 && tempAmount > 30 || (currentdate != runday) )
  Sms.sendMeText.skip()