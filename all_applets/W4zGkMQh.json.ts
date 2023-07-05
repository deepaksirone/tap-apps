var isoWeek = Meta.currentUserTime.isoWeek()
if ((isoWeek % 2) == 0) {
  Slack.postToChannel.skip()
}
