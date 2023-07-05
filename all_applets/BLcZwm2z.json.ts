var Phase=GoogleAssistant.voiceTriggerWithOneNumberIngredient.NumberField.charCodeAt(Number());
//light on
if(Phase=1){
  Smartlife.turnOn.skip();
}
//light off
if(Phase=2){
  Smartlife.turnOff.skip();
}
else{
  Smartlife.turnOff.skip();
  Smartlife.turnOn.skip();
}