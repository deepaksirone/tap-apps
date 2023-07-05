if(!Feed.newFeedItem.EntryImageUrl){
  Dropbox.addFileFromUrl.skip();
  Dropbox.createTextFileDb.skip();
} else {
  var name = Feed.newFeedItem.EntryImageUrl;

  var filteredName = name.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');

  var url = '[InternetShortcut]\r\nURL=' + Feed.newFeedItem.EntryUrl + '\r\nIconIndex=0';

  Dropbox.addFileFromUrl.setFilename(filteredName);
  Dropbox.createTextFileDb.setFilename(filteredName + '.url');
  Dropbox.createTextFileDb.setBody(url);

}