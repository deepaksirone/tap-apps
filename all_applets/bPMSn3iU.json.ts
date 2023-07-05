var actualDay = Meta.currentUserTime.isoWeekday();
var timeOfDay = Meta.currentUserTime.hour()

function process(): void {
  var timeOfDay1 = Meta.currentUserTime.hour()
  if (timeOfDay1 >= 8 || timeOfDay1 <= 20 ) {
    // Will Continue as Normal
    Telegram.sendMessage.setText( Twitter.newTweetFromSearch.Text + "<br><br>" + Twitter.newTweetFromSearch.LinkToTweet );
    Telegram.sendMessage.setIncludeWebPagePreview( "1" );
  }
  else{
    Telegram.sendMessage.skip();
  }
}

if(actualDay!=6){
  if(actualDay!=7){
    process();
  }
}
