if(Reddit.newPostInSubreddit.Title.indexOf("Icon Pack") === -1){
  Pushbullet.sendLink.skip();
}
else{
  Pushbullet.sendLink.setTitle(Reddit.newPostInSubreddit.Title);
  Pushbullet.sendLink.setUrl(Reddit.newPostInSubreddit.PostURL);
}