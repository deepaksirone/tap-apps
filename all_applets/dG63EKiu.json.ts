var title = Trigger.EntryTitle
var
 subject
  =
   'Trump'

if(title.indexOf(subject) < 0) {
   Slack.postToChannel.skip("Not related to Trump")
}