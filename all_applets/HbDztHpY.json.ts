
var timeOfDay = Meta.currentUserTime.hour()
var dayOfWeek = Meta.currentUserTime.isoWeekday()

if (!((timeOfDay >= 15 && timeOfDay <= 20 ) && (dayOfWeek >= 1 && dayOfWeek <= 5))) {
  // Skip sending the message
  AndroidMessages.sendAMessage.skip(`Incorrect Hour: ${timeOfDay} and Day: ${dayOfWeek} combination`)
}