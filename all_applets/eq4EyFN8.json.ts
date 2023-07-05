var timestamp = Meta.currentUserTime.format('MMMM YYYY');
var albumName = 'IFTTT Photos for ' + timestamp; 
FacebookPages.createPhotoPage.setAlbum(albumName);