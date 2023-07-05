var title = Trigger.EntryTitle
var subject = 'Mission'

if (title.indexOf(subject) < 0) {
   IosReadingList.createReadingListItem.skip("Not related to the Mission")
}
