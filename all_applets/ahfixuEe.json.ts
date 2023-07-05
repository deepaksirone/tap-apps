var title = Trigger.EntryTitle
var keyword1 = 'Uber'


if (title.indexOf(keyword1) < 0) {
  Evernote.appendToNote.skip("Not related to Uber")
}