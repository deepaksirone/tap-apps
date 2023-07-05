var hourOfDay = Meta.currentUserTime.hour();

if (hourOfDay < 10) {
  //morning drop off
  Gmail.sendAnEmail.skip();
}