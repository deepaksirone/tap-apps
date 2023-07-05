var title = Trigger.EntryTitle
var subject = 'Apple'

if (title.indexOf(subject) < 0) {
   EmailDigest.sendWeeklyEmail.skip("Not related to Apple")
}