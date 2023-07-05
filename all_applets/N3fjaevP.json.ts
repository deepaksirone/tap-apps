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
   IosCalendar.createCalendarEvent.skip(myMinutes);
   IfNotifications.sendNotification.setMessage(myMinutes);
} else {
//
// Set up the calendar event
//
   IosCalendar.createCalendarEvent.setStartDate(Meta.currentUserTime.format('LLL'));
   IosCalendar.createCalendarEvent.setDuration(myMinutes);
   //
   // If no error so far, let user know.
   //
   // Also, if it's less than an hour, show me the minutes...
   //   
   var myNotification = "";
   if (Number(myMinutes) < 60) {
     myNotification = myHours.toString() + "-hour ("+ myMinutes+"-minute) event for Do Not Disturb time was passed to IFTTT's iOS Calendar service.";
     IosCalendar.createCalendarEvent.setNotes(myMinutes + "-minute event");
   } else { 
     myNotification = myHours.toString() + "-hour event for Do Not Disturb time was passed to IFTTT's iOS Calendar service.";
     IosCalendar.createCalendarEvent.setNotes(myHours.toString() + "-hour event");
   }
   IfNotifications.sendNotification.setMessage(myNotification);
}
