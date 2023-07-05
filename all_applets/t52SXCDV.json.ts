var hour     = Meta.triggerTime.hour()

// If time is not beween 9PM and 7 AM then skip the action
if (hour > 7 && hour < 21) {
  Gogogate.closeDoor.skip()
}