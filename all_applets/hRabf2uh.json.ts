var isoWeek = Meta.currentUserTime.isoWeek()
if ((isoWeek % 2) == 1) {
  Slack.postToChannel.skip()
}