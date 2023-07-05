var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay < 17) {
  AndroidMessages.sendAMessage.skip("It's too early to be going home");
}