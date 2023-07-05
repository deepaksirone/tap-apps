var actualDay = Meta.currentUserTime.isoWeekday();
var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay >= 5 || timeOfDay <= 22 ) {
  // Will Continue as Normal
  Telegram.sendMessage.setText( Twitter.newTweetFromSearch.Text + "<br><br>" + Twitter.newTweetFromSearch.LinkToTweet );
  Telegram.sendMessage.setIncludeWebPagePreview( "1" );
}
else{
  Telegram.sendMessage.skip();
}