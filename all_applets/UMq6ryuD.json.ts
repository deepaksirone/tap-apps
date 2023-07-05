var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

if (Day==6 || Day==7) {
  IfNotifications.sendNotification.skip("Not a weekday")
}

else if (Hour < 7 || (Hour > 9 && Hour < 5) || Hour > 19) {
  IfNotifications.sendNotification.skip("Not commuting hours")
}