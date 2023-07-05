var tweet = Twitter.newTweetByUser.Text;

var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

var match = tweet.match(regex);

if (match) {
  Pocket.readItLater.setUrl(match[0]);
} else {
  Pocket.readItLater.skip("No URL");
}