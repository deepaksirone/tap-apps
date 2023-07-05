const bing_url = 'https://bing.com';

let entry_url = Feed.newFeedItem.EntryUrl;
let entry_url_hd = entry_url.replace('_1366x768', '_1920x1080');

var full_url = "";
if (entry_url_hd.indexOf('/') === 0) {
  full_url = bing_url.concat(entry_url_hd);
} else {
  full_url = entry_url_hd;
}

let file_ext_match = (/\.[0-9a-z]+$/i).exec(full_url);

if (file_ext_match !== null) {
  let file_ext = file_ext_match[0];
  let filename = Meta.triggerTime.format('YYYY-MM-DD').concat(file_ext); 

  Dropbox.addFileFromUrl.setUrl(full_url);
  Dropbox.addFileFromUrl.setFilename(filename);
} else{
  Dropbox.addFileFromUrl.skip();
}
