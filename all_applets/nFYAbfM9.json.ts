var string = Feed.newFeedItem.EntryTitle;
var expr = /\s(UP)/;
if (string.match(expr)) {
  MagicLight.changeColor.skip()
}