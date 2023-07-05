var textField = GoogleAssistant.voiceTriggerWithOneTextIngredient.TextField.slice(2);

textField = textField.replace(/\s+/g, '');
textField = textField.replace(/\./g, '');

var ampm = textField.slice(-2)//from the 2nd to last char onward
if ((ampm !== 'am') && (ampm !== 'pm')) {
  GoogleCalendar.quickAddEvent.skip()
  IfNotifications.sendNotification.setMessage('\'' + textField + '\' could\'nt be interpreted properly.')
}else {
  IfNotifications.sendNotification.skip()
  GoogleCalendar.quickAddEvent.setQuickAdd('Alarm Bell at ' + textField + ' for 5 minutes')
}