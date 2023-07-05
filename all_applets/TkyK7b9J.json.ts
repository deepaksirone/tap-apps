var title = Trigger.EntryTitle
var subject = 'Ask Slashdot'

if (title.indexOf(subject) < 0) {
   IfNotifications.sendNotification.skip("Not an 'Ask Slashdot' article")
}