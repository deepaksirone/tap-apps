var estado = Twitter.newTweetByYou.Text
var foto = Twitter.newTweetByYou.LinkToTweet
var comp = estado.substr(0,2)

if (comp ==  "10"){
  FacebookPages.createPhotoPage.setPhotoUrl(foto)
  FacebookPages.createPhotoPage.setMessage("Selfie Button #DennysIrazú")
  FacebookPages.createPhotoPage.setAlbum("Selfie Button")
}

else if (comp ==  "11"){
  FacebookPages.createPhotoPage.setPhotoUrl(foto)
  FacebookPages.createPhotoPage.setMessage("Selfie Button #DennysPinares")
  FacebookPages.createPhotoPage.setAlbum("Selfie Button")
}

else if (comp ==  "12"){
  FacebookPages.createPhotoPage.setPhotoUrl(foto)
  FacebookPages.createPhotoPage.setMessage("Selfie Button #DennysAeropuerto")
  FacebookPages.createPhotoPage.setAlbum("Selfie Button")
}

else{
  FacebookPages.createPhotoPage.skip()
}