let aqi = parseInt(Kaiterra.lasereggAqi.Aqi)

if (aqi >= 0 && aqi <= 50) {
  Hue.setColorAllHue.setColor("25aa68")
} else if (aqi > 50 && aqi <= 100) {
  Hue.setColorAllHue.setColor("ff9900")
} else if (aqi > 100 && aqi <= 150) {
  Hue.setColorAllHue.setColor("ff6600")
} else if (aqi > 150 && aqi <= 200) {
  Hue.setColorAllHue.setColor("e40000")
} else if (aqi > 200 && aqi <= 300) {
  Hue.setColorAllHue.setColor("ae0043")
} else {
  Hue.setColorAllHue.setColor("6c003b")   
}