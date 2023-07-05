var hour = Meta.currentUserTime.hour()
if (hour > 22) {
  Hue.toggleAllHue.skip("Too late")
}
else if (hour < 12) {
  Hue.toggleAllHue.skip("Too early")
}