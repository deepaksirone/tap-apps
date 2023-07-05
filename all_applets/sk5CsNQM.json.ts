const content = Feed.newFeedItem.EntryContent
var s: string = content
   // Remove HTML tags :seenoevil:
   .replace(/\<[^\>]+\>/mg, "")
   // Extract just the air quality part
   .match(/Current Air Quality:[\s\S]*(?=Agency:)/m)[0];
IfNotifications.sendNotification.setMessage(
   s
   // Strip extra whitespace
   .trim()
   // Separate parts with commas
   .replace(/\s\s+/mg, ", ")
)
