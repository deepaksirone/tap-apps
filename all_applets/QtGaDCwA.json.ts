var incomingTweet = Twitter.newTweetByUser.Text

if (incomingTweet.indexOf("#ethereum") == -1) {
  IfNotifications.sendNotification.skip("Not Interested")
}