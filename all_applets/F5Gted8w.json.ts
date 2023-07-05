var co2Index = GreenLightSignal.co2Level.Co2Index 

if (co2Index === "low" || co2Index === "very low") {​​​​

  Lifx.color.setAdvancedOptions('color: #00e600; brightness: 1; transition_duration: 0')

}​​​​ else {​​​​

  Lifx.color.setAdvancedOptions('color: #ffffff; brightness: 0; transition_duration: 0')

}​​​​