const cmd = Trigger.TextField.toLowerCase()

const colors:{[key:string]:string} = {
  'white': '#FFFFFF', 
  'warm': '#FFE14B',
  'warmer': '#FFD13A',
  'black': 'purple', 
  'red': 'red',
  'orange': 'orange',
  'yellow': 'yellow',
  'cyan': 'cyan',
  'green': 'green', 
  'blue': 'blue',
  'purple': 'purple', 
  'pink': 'pink'
}

const skipAllBut = (exception?:string)=> {
  const msg = "Unknown command"
  if (exception != 'color')   Lifx.color.skip(msg)
  if (exception != 'toggle')  Lifx.toggle.skip(msg)
  if (exception != 'turnOff') Lifx.turnOff.skip(msg)
  if (exception != 'turnOn')  Lifx.turnOn.skip(msg)
}

// alias
const skipAll = skipAllBut

if (cmd.indexOf("dim") != -1) {
  let val:string
  if (cmd.indexOf("more")) {
    val = `brightness: ${0.3}; color: ${colors['warmer']}`
  } else {
    val = `brightness: ${0.5}; color: ${colors['warm']}`
  }
  skipAllBut('color')
  Lifx.color.setAdvancedOptions(val)
} else if (cmd.indexOf("bright") != -1) {
  const index = cmd.indexOf("more") || cmd.indexOf("brighter") != -1 ? 1 : 0.7
  skipAllBut('color')
  Lifx.color.setAdvancedOptions(
    `brightness: ${index};`
  )
} else if (cmd.indexOf("on") != -1) {
  skipAllBut('turnOn')
} else if (cmd.indexOf("off") != -1) {
  skipAllBut('turnOff')
} else if (Object.keys(colors).indexOf(cmd) != -1) {
  skipAllBut('color')
  Lifx.color.setAdvancedOptions(
    `color: ${colors[cmd]};`
  )
} else {
  skipAll()
}