var desc = "";
var tt = Meta.triggerTime.format();
var s = Foursquare.anyNewCheckin.Shout;
if (s.length > 0 && s != "(none)") {
  desc = s + "\n\n";
}
desc = desc + "Venue: " + Foursquare.anyNewCheckin.VenueUrl + 
  "\nMap: " + Foursquare.anyNewCheckin.VenueMapImageUrl + 
  "\n@ " + Foursquare.anyNewCheckin.CheckinDate + " ( " + tt + " )";
GoogleCalendar.addDetailedEvent.setDescription(desc);
GoogleCalendar.addDetailedEvent.setStartTime(tt);
GoogleCalendar.addDetailedEvent.setEndTime(tt);