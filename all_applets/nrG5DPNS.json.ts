// Verify that this is a price tweet
const btc = "#bitcoin #btc Price: $";
const eth = "#ethereum #eth Price: $";
const prefix = " 24Chg: ";
const suffix = "% 24Vol";
let start = Twitter.newTweetByUser.Text.indexOf(prefix)+prefix.length;
let end = Twitter.newTweetByUser.Text.indexOf(suffix);

if ((Twitter.newTweetByUser.Text.indexOf(btc)!=0
    && Twitter.newTweetByUser.Text.indexOf(eth)!=0)
    || start < 0
    || end < 0) {
      IfNotifications.sendNotification.skip();
} else {
  var timeOfDay = Meta.currentUserTime.hour();
  if (timeOfDay != 8)
    IfNotifications.sendNotification.skip();
}