var timeofday = Meta.currentUserTime.hour()
if (timeofday < 21){
  IfNotifications.sendNotification.skip()
}
else
{}