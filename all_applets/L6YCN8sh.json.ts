var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay >= 6 || timeOfDay < 18 ) {
  // Turn on
  Kasa.turnOn.skip()
}