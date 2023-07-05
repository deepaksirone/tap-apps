var Hour = Meta.currentUserTime.hour()

// Skip outside of 7-10am
if (Hour < 7 || Hour > 10) {
  Slack.postToChannel.skip("Outside of commuting hours")
}