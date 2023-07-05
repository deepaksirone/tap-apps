var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

// Skip outside of 7-10am and 5-7pm
if (Hour <7 || (Hour > 10 && Hour < 17) || Hour > 19) {
  IfNotifications.sendNotification.skip("Outside of commuting hours")
}

// Skip on weekends
if (Day == 6 || Day == 7) {
  IfNotifications.sendNotification.skip("Not a weekday")
}