var string = Feed.newFeedItem.EntryTitle;
var expr = /\s(DOWN)/;
if (string.match(expr)) {
  MagicLight.changeColor.skip()
}