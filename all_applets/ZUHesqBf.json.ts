var Caption = Instagram.anyNewVideoByYouInstagram.Caption;
if (Caption.search(/#Ad|#Sponsored|#ad|#sponsored/) !== -1){
Twitter.postNewTweetWithImage.skip()
FacebookPages.createPhotoPage.skip()
}