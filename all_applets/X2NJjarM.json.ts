
if (FacebookPages.newStatusMessageByPage.Message.length >= 115) {
  var subStr = FacebookPages.newStatusMessageByPage.Message.substr(0, 107);
  subStr += " [...] "
  Twitter.postNewTweet.setTweet(subStr + FacebookPages.newStatusMessageByPage.PageUrl);
} else {
  Twitter.postNewTweet.setTweet(FacebookPages.newStatusMessageByPage.Message + " " + FacebookPages.newStatusMessageByPage.PageUrl);
}