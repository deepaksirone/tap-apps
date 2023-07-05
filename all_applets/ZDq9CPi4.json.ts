var end = Meta.triggerTime.calendar();
var hours = GoogleAssistant.voiceTriggerWithOneTextAndOneNumberIngredient.NumberField;
var start = Meta.triggerTime.subtract(hours,'hours');

GoogleCalendar.addDetailedEvent.setStartTime(start.calendar().toString());
GoogleCalendar.addDetailedEvent.setEndTime(end.toString());
