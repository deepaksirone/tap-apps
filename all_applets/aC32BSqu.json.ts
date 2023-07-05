var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

// Skip outside of 7-10am and 5-7pm
if (Hour < 7 || Hour > 10) {
  Slack.postToChannel.skip("Outside of commuting hours")
}

// Skip on weekends
if (Day == 6 || Day == 7) {
  Slack.postToChannel.skip("Not a weekday")
}