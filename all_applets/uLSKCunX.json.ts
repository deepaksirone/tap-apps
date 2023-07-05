var Day = Meta.currentUserTime.day()
var
 Hour
  =
   Meta.currentUserTime.hour()

if (Day == 6) {
  Arlo.record.skip("Not a weekday")
}

if (Day == 7) {
  Arlo.record.skip("Not a weekday")
}

if (Hour > 17 || Hour < 9) {
  Arlo.record.skip("Not working hours")
}
