var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay <= 21 || timeOfDay > 5 ) {
  // Skip the lights
  WinkShortcuts.activateScene.skip()
}