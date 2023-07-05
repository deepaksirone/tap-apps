if (Twitter.newTweetByUser.Text.indexOf("SNES") < 0
  && Twitter.newTweetByUser.Text.indexOf("Super NES") < 0
  && Twitter.newTweetByUser.Text.indexOf("Super Nintendo") < 0) {
    IfNotifications.sendNotification.skip()
}