// Verify that this is a price tweet
const coinPrefix = "#bitcoincash #bch Price: $";
const prefix = " 24hChg: ";
const suffix = "% 24Vol";
let start = Twitter.newTweetByUser.Text.indexOf(prefix)+prefix.length;
let end = Twitter.newTweetByUser.Text.indexOf(suffix);

if (Twitter.newTweetByUser.Text.indexOf(coinPrefix)!=0
   || start < 0
    || end < 0) {
      IfNotifications.sendNotification.skip();
} else {

  // Verify that absolute value of change is > 10%
  let change = Twitter.newTweetByUser.Text.substr (start, end-start);
  if (Math.abs(parseFloat(change))<10) {
    IfNotifications.sendNotification.skip();
  }
}