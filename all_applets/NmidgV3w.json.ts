const bing_url = 'https://bing.com';

const fmtTitle = (title: string) => title.replace(/[^a-z0-9 -]/ig, ' ').replace(/  +/gi, ' ').trim().toLowerCase();

let entry_url = Feed.newFeedItem.EntryUrl;
let entry_url_hd = entry_url.replace('_1366x768', '_1920x1080');

var full_url;
if (entry_url_hd.indexOf('/') === 0) {
  full_url = bing_url.concat(entry_url_hd);
} else {
  full_url = entry_url_hd;
}

let file_ext_match = (/\.[0-9a-z]+$/i).exec(full_url);

if (file_ext_match !== null) {
  let file_ext = file_ext_match[0];
  let entry_title = fmtTitle(Feed.newFeedItem.EntryTitle);
  let filename = Meta.triggerTime.format('YYYY-MM-DD').concat(' ', entry_title, file_ext); 

  GoogleDrive.uploadFileFromUrlGoogleDrive.setUrl(full_url);
  GoogleDrive.uploadFileFromUrlGoogleDrive.setFilename(filename);
} else{
  GoogleDrive.uploadFileFromUrlGoogleDrive.skip();
}