var re_link_img = /pic\.twitter\.com\/([0-9a-zA-Z]*)/;
var matches = re_link_img.exec(Twitter.newTweetByUser.TweetEmbedCode);

var txt = Twitter.newTweetByUser.Text || ""
var created = Twitter.newTweetByUser.CreatedAt
var author = Twitter.newTweetByUser.UserName
var msg = txt + "<br><br>" + created + "<br>" + "Author: " + author

Telegram.sendPhoto.setCaption(msg)

if (matches)
  Telegram.sendPhoto.setPhotoUrl("https://t.co/" + matches[1])
else 
  Telegram.sendPhoto.skip()