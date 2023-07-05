var hour    = Meta.currentUserTime.hour()
var hourStr = hour.toString()

if (hour < 7) {
  Nuki.lockDoor.skip("It's too early to close the door (before 7h).")
} else if (hour >= 13)  {
  Nuki.lockDoor.skip("It's too late to close the door (after 13h).")
} else {
  IfNotifications.sendRichNotification.setMessage("Sending close door trigger...")
}