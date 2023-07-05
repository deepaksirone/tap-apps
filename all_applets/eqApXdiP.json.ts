var tweetBody: Array<string> = [Feed.newFeedItem.EntryTitle];
var subreddit = Feed.newFeedItem.EntryUrl.match(/\/r\/([a-z_\-]+)\//i);

if (subreddit)
  tweetBody.push(
    '#' + subreddit[1],
    '#r' + subreddit[1]
  );

tweetBody.push(Feed.newFeedItem.EntryUrl);

if (Feed.newFeedItem.EntryImageUrl.match(/no_image_card/)) {
  Twitter.postNewTweet.setTweet(tweetBody.join(' '));
  Twitter.postNewTweetWithImage.skip();
} else {
  var imgURL = Feed.newFeedItem.EntryContent.match(/<img src="(https:\/\/[a-z\d.]+\.com\/[a-z\d?._]+)"/);
  if (imgURL)
    Twitter.postNewTweetWithImage.setPhotoUrl(imgURL[1]);
    
  Twitter.postNewTweetWithImage.setTweet(tweetBody.join(' '));
  Twitter.postNewTweet.skip();
}
