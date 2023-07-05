var timeOfDay = Meta.currentUserTime.hour();

  if (timeOfDay > 22 || timeOfDay < 9) 
  {
  IfNotifications.sendNotification.skip("Too late to drink; resume tomorrow");
  } 
