var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

if (Day == 6 || Day == 7) {
  Gmail.sendAnEmail.skip("Not a weekday")
}

else if (Hour < 17 || Hour > 19) {
  Gmail.sendAnEmail.skip("Not afternoon commute hours")
}