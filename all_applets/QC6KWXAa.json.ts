var s = Feed.newFeedItem.EntryContent;
if(!s.match(/(東京|神奈川|横浜)/)){
  Slack.postToChannel.skip();
}