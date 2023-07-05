let aqi = parseInt(Kaiterra.lasereggAqi.Aqi)

if (aqi >= 0 && aqi <= 50) {
  Nanoleaf.changeColorRequest.setValue("25aa68")
} else if (aqi > 50 && aqi <= 100) {
  Nanoleaf.changeColorRequest.setValue("ff9900")
} else if (aqi > 100 && aqi <= 150) {
  Nanoleaf.changeColorRequest.setValue("ff6600")
} else if (aqi > 150 && aqi <= 200) {
  Nanoleaf.changeColorRequest.setValue("e40000")
} else if (aqi > 200 && aqi <= 300) {
  Nanoleaf.changeColorRequest.setValue("ae0043")
} else {
  Nanoleaf.changeColorRequest.setValue("6c003b")   
}
