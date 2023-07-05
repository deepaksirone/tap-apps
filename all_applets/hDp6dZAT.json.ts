var hour = Meta.currentUserTime.hour();
if(hour >= 22 || hour <= 8){
  IfNotifications.sendNotification.skip();
}else{
  Email.sendMeEmail.skip();
}