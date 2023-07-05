var re1 = RegExp(" Beta");
var re2 = RegExp(" Release Candidate");

if (re1.test(Feed.newFeedItem.EntryTitle) || re2.test(Feed.newFeedItem.EntryTitle)) {
  Email.sendMeEmail.skip();
}
