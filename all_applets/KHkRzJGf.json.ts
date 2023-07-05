var timeToMakeItInBefore24hr = "9:00";

var threshhold = {
  hour: parseInt(timeToMakeItInBefore24hr.split(":")[0]),
  minute: parseInt(timeToMakeItInBefore24hr.split(":")[1])
}

var occuredAt = {
  hour: new Date(Location.enterRegionLocation.OccurredAt).getHours(),
  minute: new Date(Location.enterRegionLocation.OccurredAt).getMinutes()
}

if(occuredAt.hour > threshhold.hour && occuredAt.minute > threshhold.minute){
  Qapital.saveTowardGoal.skip("Too late.");
}