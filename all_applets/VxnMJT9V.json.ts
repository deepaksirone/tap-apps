const colors: Array<string> = [
  "#FF8400", 
  "#FF0000", 
  "#15FF00", 
  "#FF00D4",
  "#00D4FF",
  "#003CFF"
]
const index = Math.floor((Math.random() * colors.length))

Lifx.color.setAdvancedOptions("color: " + colors[index]+ " brightness: 1; duration: 12")
