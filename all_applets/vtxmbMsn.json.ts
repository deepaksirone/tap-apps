const content: string = Feed.newFeedItem.EntryContent
var s: string = content.replace(/\<[^\>]+\>/mg, "").match(/Current Air Quality:[\s\S]*(?=Agency:)/m)[0];
IfNotifications.sendNotification.setMessage(
   s.trim()
   // Separate parts with commas
   .replace(/\s\s+/mg, ", ")
)
