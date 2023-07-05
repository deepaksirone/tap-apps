var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay > 6 && timeOfDay < 18) {
  Kasa.turnOn.skip("skipping since it's between 6am-6pm")
}