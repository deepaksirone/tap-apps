var d = new Date();
if (d.getDay() != 0) {
  Twitter.postNewTweetWithImage.skip();
}