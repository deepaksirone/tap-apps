var hour = Meta.triggerTime.hour()
if (hour < 22) {
  LutronCasetaWireless.setScene.skip("Not a school night.")
}