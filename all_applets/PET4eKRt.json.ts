var title = Trigger.EntryTitle
var subject1 = 'Google'
var subject2 = 'Alphabet'

if (title.indexOf(subject1) < 0 && title.indexOf(subject2) < 0) {
   EmailDigest.sendWeeklyEmail.skip("Not related to Google")
}