var string = Feed.newFeedItem.EntryTitle;
var expr = /([0-2][0-9]|\d{4,})\./g;
if (string.match(expr)) {
  MagicLight.changeColor.skip()
}