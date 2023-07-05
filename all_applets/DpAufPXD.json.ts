var season = Meta.currentUserTime.month();
// By month:     J   F   M   A   M   J   J   A   S   O   N   D
var sunrises: Array<number> = [ 9,  8,  7,  7,  6,  5,  5,  6,  7,  8,  8,  9 ];
var sunsets: Array<number>  = [ 15, 16, 17, 19, 20, 21, 21, 20, 19, 18, 16, 15 ];

var hour = Meta.currentUserTime.hour();

// If daylight
if (hour >= sunrises[season] && hour <= sunsets[season]) {
  Hue.turnOnAllHue.skip();
}
