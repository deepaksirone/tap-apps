let currentHour = Meta.currentUserTime.hour();
if (currentHour < 10 || currentHour >= 17) {
  IfNotifications.sendNotification.skip(`It's ${currentHour}, only running between 10am and 5pm`);
GoogleSheets.appendToGoogleSpreadsheet.skip(`It's ${currentHour}, only running between 10am and 5pm`);
}