var cut = Meta.currentUserTime;
var hour = cut.hour();
var minute = cut.minute();
var minutes = hour * 60 + minute;
if (minutes < 1020) {
  AndroidMessages.sendAMessage.skip("Too early");
}