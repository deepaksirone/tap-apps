var eveningStart = moment().hour(11).minute(30);
var morningEnd = moment().hour(6).minute(0);
if (Meta.triggerTime.isBefore(eveningStart) || Meta.triggerTime.isAfter(morningEnd)) {
  Hue.turnOnAllHue.skip();
}
