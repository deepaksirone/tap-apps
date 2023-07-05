var entryTitle = Feed.newFeedItem.EntryTitle;
if( entryTitle.toLowerCase().indexOf('shoe') <= -1) {
  Tumblr.createPhotoPost.skip();
}
