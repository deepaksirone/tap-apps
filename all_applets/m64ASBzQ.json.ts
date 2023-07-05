if (Twitter.newTweetByUser.Text.indexOf("3 slots") !== -1) {
  Gmail.sendAnEmail.setSubject("[SplatNet] New 3 slot equipment")
  Gmail.sendAnEmail.setBody(Twitter.newTweetByUser.Text)
} else {
  Gmail.sendAnEmail.skip()
}