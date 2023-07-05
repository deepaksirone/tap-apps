var Day = Meta.currentUserTime.day();
var Hour = Meta.currentUserTime.hour();

if (Day == 6) {
  Skybell.record60sOfVideo.skip("Not a weekday");
  Email.sendMeEmail.skip("Not a weekday");
}

else if (Day == 7) {
  Skybell.record60sOfVideo.skip("Not a weekday");
  Email.sendMeEmail.skip("Not a weekday");
}

else if (Hour > 17 || Hour < 9) {
  Skybell.record60sOfVideo.skip("Not a weekday");
  Email.sendMeEmail.skip("Not a weekday");
}
