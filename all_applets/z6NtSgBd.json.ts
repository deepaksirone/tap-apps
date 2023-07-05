if (Twitter.newTweetByUser.Text.indexOf('Struts') === -1) {
  Slack.postToChannel.skip();
}