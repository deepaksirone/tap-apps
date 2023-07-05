//
// If all blanks, use 1 hour.
//
var myHours = 0;
if (DoNote.doNoteNewCommandCommon.NoteText.trim() == "") {
   myHours = 1;
} else {
   myHours = Number(DoNote.doNoteNewCommandCommon.NoteText.trim());
}
//
// Round up to the nearest whole minute.
//
var myMinutes = (myHours * 60).toFixed(0);
//
// If not a number, then notify user and skip add of event.
//
if (myMinutes == "NaN") {
   myMinutes = "Your text \"" + DoNote.doNoteNewCommandCommon.NoteText + "\" was not recognized as a number. Event not added."
   GoogleCalendar.quickAddEvent.skip(myMinutes);
   IfNotifications.sendNotification.setMessage(myMinutes);
} else {
//
// Me being picky... if one hour, don't say 'hours' :)
//
   var myEvent = myMinutes + " minutes Do Not Disturb";
   GoogleCalendar.quickAddEvent.setQuickAdd(myEvent);
   if (myHours == 1) {
     IfNotifications.sendNotification.setMessage("Event for \"" + myHours.toString() + "\" hour sent to IFTTT's Google Caledar service as \"" + myEvent + "\".");
   } else {
     IfNotifications.sendNotification.setMessage("Event for \"" + myHours.toString() + "\" hours sent to IFTTT's Google Caledar service  as \"" + myEvent + "\".");
   }
}
