// Runs if the weather changes during the day
// There is no need to offset outdoor light
// at night

var Hour = Meta.currentUserTime.hour()

if (Hour < 6 || Hour > 19){
  Hue.setBrightnessAllHue.skip("Too dark outside to need to counteract bright sun.")
}