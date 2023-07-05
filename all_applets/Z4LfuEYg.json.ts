function filter (): void {
  const coinLabel = "#bitcoincash #bch Price: $";
  const prefix = " 24hChg: ";
  const suffix = "% 24Vol";
  let start = Twitter.newTweetByUser.Text.indexOf(prefix);
  let end = Twitter.newTweetByUser.Text.indexOf(suffix);

  // verify that this is properly formatted price email
  if (Twitter.newTweetByUser.Text.indexOf(coinLabel)!=0
      || start < 0
      || end < 0) {
        Email.sendMeEmail.skip();
        return;
  }

  // Verify that absolute value of change is > 10%
  start += prefix.length;
  let change = Twitter.newTweetByUser.Text.substr (start, end-start);
  if (Math.abs(parseFloat(change))<10.0) {
    Email.sendMeEmail.skip();
    return;
  }
}
// run the filter function
filter ();
