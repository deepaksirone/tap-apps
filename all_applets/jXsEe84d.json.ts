//let postText = '';
//let postTextonly = '';
//let postTextonlyHeadline = '';
//let posthashesonly: Array<string> = [];
let posthashesonlyLen = 0;
let posthashesonlytext = '';
let posthashesonlytextkomma = '';
let postText = Instagram.anyNewPhotoByYou.Caption;
var regexp = RegExp('#([^\\s]*)', 'g');
let postTextonly = postText.replace(regexp, '');
let postTextonlyHeadline = postText.slice(0, 40)+' ...';
let posthashesonly = postText.match(regexp);
posthashesonlyLen = posthashesonly.length;
let i = 0;
for (i = 0; i < posthashesonlyLen; i++) {
    posthashesonlytext += posthashesonly[i]+' ';
}
posthashesonlytextkomma = posthashesonlytext.replace(/ #/g,',');
posthashesonlytextkomma = posthashesonlytextkomma.replace('#','');
posthashesonlytextkomma = posthashesonlytextkomma.replace(' ','');
//posthashesonly = posthashesonly.implode(',');
//posthashesonlyclean = posthashesonly.replace(',#','\ #');
//document.write(postTextonlyHeadline);
//document.write("<br />+++<br />\n");
//document.write(postTextonly);
//document.write("<br />+++<br />\n");
//document.write(posthashesonlytext); // #tag #tag2 #tag3
//document.write("<br />+++<br />\n");
//document.write(posthashesonlytextkomma); // tag,tag2,tag3
//document.write("<br />+++<br />\n");

Wordpress.createPhotoPostWp.setTitle(postTextonlyHeadline);
Wordpress.createPhotoPostWp.setSourceUrl(Instagram.anyNewPhotoByYou.SourceUrl);
Wordpress.createPhotoPostWp.setCaption(postTextonly+'<br />posted on Instagram - '+Instagram.anyNewPhotoByYou.Url);
Wordpress.createPhotoPostWp.setCategories('Instagram');
Wordpress.createPhotoPostWp.setTags(posthashesonlytextkomma);
//Wordpress.createPhotoPostWp.setPostStatus();
