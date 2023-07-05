if (Meta.currentUserTime.hour() < 18 && Meta.currentUserTime.hour() >= 6) {
  Yeelight.setScene.skip('Too Early');
}