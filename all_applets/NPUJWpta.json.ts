var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

if (Day==6 || Day==7) {
  Slack.postToChannel.skip("Not a weekday")
}

else if (Hour < 7 || Hour > 9) {
  Slack.postToChannel.skip("Not morning commute hours")
}