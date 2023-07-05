var pathMin : number = 4;
var pathMax : number = 49;
var path : number = (Math.random() * (pathMax - pathMin + 1));
var paddedPath : string = path.toFixed(0);
while (paddedPath.length < 3) {
  paddedPath = '0' + paddedPath;
}

var maxId : number = 9999;
var id : number = (Math.random() * (maxId + 1));

var requestPath : string = 'http://generated.inspirobot.me/' + paddedPath + '/aXm' + id.toString() + 'xjU.jpg';

AndroidDevice.setWallpaper.setPhotoUrl(requestPath);
