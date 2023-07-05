//let postText;
//let postTextonly;
//let postTextonlyHeadline;
//let posthashesonly;
//let posthashesonlyLen;
//let posthashesonlytext;
//let posthashesonlytextkomma;
let postText = Instagram.anyNewPhotoByYou.Caption;
var regexp = RegExp('#([^\\s]*)', 'g');
let postTextonly = postText.replace(regexp, '');
let postTextonlyHeadline = postText.slice(0, 40)+' ...';
let posthashesonly = postText.match(regexp);
let posthashesonlyLen = posthashesonly.length;
let posthashesonlytext = '';
let i = 0;
for (i = 0; i < posthashesonlyLen; i++) {
    posthashesonlytext += posthashesonly[i]+' ';
}
let posthashesonlytextkomma = posthashesonlytext.replace(/ #/g,',');
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

Tumblr.createPhotoPost.setSourceUrl(Instagram.anyNewPhotoByYou.SourceUrl);
Tumblr.createPhotoPost.setCaption(postTextonly+'<br />posted on Instagram - '+Instagram.anyNewPhotoByYou.Url);
Tumblr.createPhotoPost.setTags(posthashesonlytextkomma);
//Tumblr.createPhotoPost.setState();
