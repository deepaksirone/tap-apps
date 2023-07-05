var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 0 && timeOfDay < 17) {
  Irobot.dockRobot.skip()
}