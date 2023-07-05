var Day = Meta.currentUserTime.day()
var Hour = Meta.currentUserTime.hour()

if (Day == 6 || Day == 7) {
  Slack.postToChannel.skip("Not a weekday")
}

else if (Hour < 7 || Hour > 10) {
  Slack.postToChannel.skip("Not commuting hours")
}