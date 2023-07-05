var hour     = Meta.currentUserTime.hour()
if (hour < 6) {
  LutronCasetaWireless.setScene.skip("Too early")
} else if (hour > 17)  {
  LutronCasetaWireless.setScene.skip("Too late")
}