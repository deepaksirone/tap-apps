var title = Trigger.EntryTitle.toLowerCase()
var keyword1 = 'climate'
var keyword2 = 'climate change'
var keyword3 = 'global warming'

if (title.indexOf(keyword1) < 0 && title.indexOf(keyword2) < 0 && title.indexOf(keyword3) < 0) {
   Twitter.postNewTweet.skip("Not related to climate science")
}