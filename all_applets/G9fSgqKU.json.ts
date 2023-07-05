var hour = Meta.currentUserTime.hour()

// skip this before sunset
if (hour < 17) {
  Kasa.turnOn.skip()
}