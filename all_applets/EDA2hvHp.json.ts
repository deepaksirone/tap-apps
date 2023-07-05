var sunDown = moment().hour(20).minute(0);
var sunUp = moment().hour(5).minute(0);
if (Meta.triggerTime.isAfter(sunUp) || Meta.triggerTime.isBefore(sunDown)) {
  Hue.turnOnAllHue.skip();
}
