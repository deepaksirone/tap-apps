var linkRegex = /newsletter.*(https:\/\/\S+)/
var matchResult = linkRegex.exec(Twitter.newTweetByUser.Text);

if (matchResult && matchResult.length === 2) {
  Pocket.readItLater.setUrl(matchResult[1]);
} else {
  Pocket.readItLater.skip('Likely not Money Stuff');
}