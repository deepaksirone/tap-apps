var hour = Meta.triggerTime.hour()
var timeHour = 24
var minute = Meta.triggerTime.minute()

if(hour%timeHour > 0 && minute%10 > 0 )
  Email.sendMeEmail.skip()