var good_zips: Array<string> = ['90035', '90034'];
var msg = AndroidMessages.receivedAMessageFromNumber.Text;
var is_good = false;
for (var i =0; i < good_zips.length; i++) {
  if (msg.indexOf(good_zips[i]) != -1) {is_good = true;}
}
if (is_good) {
  AndroidMessages.sendAMessage.setText('good message');
} else {
  AndroidMessages.sendAMessage.setText('bad message');
}
