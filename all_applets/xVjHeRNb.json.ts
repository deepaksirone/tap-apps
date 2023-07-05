if ((Meta.triggerTime.hour() < 7 || Meta.triggerTime.hour() > 10) && (Meta.triggerTime.hour() < 16 || Meta.triggerTime.hour() > 19)) {
  Slack.postToChannel.skip()
}