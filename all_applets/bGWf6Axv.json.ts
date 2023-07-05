
// get video id
var res: string = Youtube.newVideoUploadedYt.Url.split("?v=")[1];

// get thumbnails url
var imgUrl = `http://img.youtube.com/vi/${res}/maxresdefault.jpg`;

// Create message
var message = `${Youtube.newVideoUploadedYt.Title} ${Youtube.newVideoUploadedYt.Url}`;

FacebookPages.createPhotoPage.setPhotoUrl(imgUrl);
FacebookPages.createPhotoPage.setMessage(message);
FacebookPages.createPhotoPage.setAlbum('Youtube');

Twitter.postNewTweetWithImage.setTweet(message);
Twitter.postNewTweetWithImage.setPhotoUrl(imgUrl);
