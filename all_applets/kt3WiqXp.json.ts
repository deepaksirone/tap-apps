let title=Youtube.newPublicVideoFromSubscriptions.Title;
if(title.toUpperCase().indexOf("FANTASY") ==-1){
  Twitter.postNewTweet.skip("Not Contains the word"+title+"in the title");
}