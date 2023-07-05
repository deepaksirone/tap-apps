var hour    = Meta.currentUserTime.hour()
var hourStr = hour.toString()

if (hour < 12) {
  Nuki.openDoor.skip("It's too early to open the door (before noon).")
} else if (hour >= 23)  {
  Nuki.openDoor.skip("It's too late to open the door (after 23h).")
} else {
  IfNotifications.sendRichNotification.setMessage("Sending open door trigger...")
}
