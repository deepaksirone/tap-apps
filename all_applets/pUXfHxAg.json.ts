var heure = Meta.currentUserTime.hour()
if (heure < 8) { 
  if (heure > 0) {
  Yeelight.setScene.skip()
  }
}