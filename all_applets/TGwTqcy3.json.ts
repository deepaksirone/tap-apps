var hour = Meta.currentUserTime.hour()

if (hour < 20) {
  Lifx.turnOn.skip()
}