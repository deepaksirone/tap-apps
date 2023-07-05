var weekday_num = moment(GoogleCalendar.newEventAdded.Starts.slice(0, -11)).weekday()

if (weekday_num == 6 || weekday_num == 0) {
  GoogleCalendar.addDetailedEvent.skip("Skipping since it's the weekend 😎")
}