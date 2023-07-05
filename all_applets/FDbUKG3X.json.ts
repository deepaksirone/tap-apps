//Filter out GIFs since they don't play nice with Mac screen saver
var photo_url = Tumblr.newPhotoPost.PhotoFullUrl.toLowerCase()

//Skip the action run and add a message explaining why if the photo url includes a gif extension
if(photo_url.indexOf(".gif") != -1){
  Dropbox.addFileFromUrl.skip("GIF photo detected. OSX Photo Screensavers don't work well with GIFs, so skipping this photo!")
}
