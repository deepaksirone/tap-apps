if (GoogleAssistant.voiceTriggerWithOneTextIngredient.CreatedAt){
  GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(GoogleAssistant.voiceTriggerWithOneTextIngredient.CreatedAt+"|||"+GoogleAssistant.voiceTriggerWithOneTextIngredient.TextField);
}
else{
  GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(Meta.currentUserTime.format("MM/DD/YYYY HH:mm:ss")+"|||"+GoogleAssistant.voiceTriggerWithOneTextIngredient.TextField);
}