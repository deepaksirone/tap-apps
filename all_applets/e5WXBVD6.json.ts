var eventContent = Particle.events.EventContents

if (eventContent.slice(0,5)!='Irrig' ) {
  // Skip sending me a push notification
  IfNotifications.sendNotification.skip("Only Irrigation events will be passed on")
}
