var Day = Meta.currentUserTime.day()
var Hour = Meta.currentUserTime.hour()

if (Day == 6 || Day == 7) {
  Groupme.postMessage.skip("Not a weekday")
}

else if (Hour < 7 || (Hour > 10 && Hour < 17) || Hour > 19) {
  Groupme.postMessage.skip("Not commuting hours")
}