if(GoogleCalendar.newEventAdded.Title.length > 0)
  Office365Calendar.createNewCalendarItem.setSubject(GoogleCalendar.newEventAdded.Title)
else
  Office365Calendar.createNewCalendarItem.setSubject("Untitled Event")
if(GoogleCalendar.newEventAdded.Where.length > 0)
  Office365Calendar.createNewCalendarItem.setLocation(GoogleCalendar.newEventAdded.Where)
else
  Office365Calendar.createNewCalendarItem.setLocation("Location unrecorded")

Office365Calendar.createNewCalendarItem.setBody("GBS-related work.")
Office365Calendar.createNewCalendarItem.setTime(GoogleCalendar.newEventAdded.Starts)