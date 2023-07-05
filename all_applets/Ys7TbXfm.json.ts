var timeofday = Meta.currentUserTime.hour()
if (timeofday < 19)
{
  IfNotifications.sendNotification.skip()
}
else
{}