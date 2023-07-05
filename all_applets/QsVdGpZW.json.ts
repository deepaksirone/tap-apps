if ( GoogleCalendar.newEventAdded.Where.indexOf("995 Market") < 0 
&& GoogleCalendar.newEventAdded.Where.indexOf("San Francisco") < 0 )
{
  GoogleCalendar.addDetailedEvent.skip();
}
else {
  GoogleCalendar.addDetailedEvent.setDescription("In the office from " + GoogleCalendar.newEventAdded.Starts + " to "
    + GoogleCalendar.newEventAdded.Ends
);
GoogleCalendar.addDetailedEvent.setAllDay("true");
GoogleCalendar.addDetailedEvent.setStartTime(GoogleCalendar.newEventAdded.Starts);
GoogleCalendar.addDetailedEvent.setEndTime(GoogleCalendar.newEventAdded.Ends);


}