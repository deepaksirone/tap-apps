// scan the tweet for URL patterns
var match = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/​​​​​​​​​​​​.exec(Twitter.newTweetByUser.Text)​​​​​​​;

// if none found, abort abort abort
if ((!match) || (match.length < 1)) {
  Pocket.readItLater.skip("No URL found");
} else {
  // we found at least one, let's send the first to pocket
  Pocket.readItLater.setUrl(match[0]);
}
