function filter (): void {
  const coinLabel = "Alert: 1 hour change +/- 5% or more!";

  // verify that this is properly formatted price email
  if (Twitter.newTweetByUser.Text.indexOf(coinLabel)!=0) {
        IfNotifications.sendNotification.skip();
        return;
  }
  return;
}
// run the filter function
filter ();
