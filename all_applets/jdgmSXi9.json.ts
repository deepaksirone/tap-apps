const hour     = Meta.currentUserTime.hour()
const colorKey = hour.toString()

const colors: {[key:string]:string} = {
  "17":"#F3F2EB",
  "18":"#F7F2E6",  
  "19":"#F9EFE0",
  "20":"#FBEFDC",  
  "21":"#FBE5C6",    
  "22":"#FBE5C6"     
}

if (hour < 17) {
  Lifx.color.skip("Too early")
} else if (hour < 22)  {
  Lifx.color.setAdvancedOptions(
    `color: ${colors[colorKey]}; brightness: 1; duration: 12`
  )  
} else {
  Lifx.color.skip("Too late")
}