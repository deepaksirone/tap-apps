const content = Feed.newFeedItem.EntryContent

const qualityScoreString: string = content
  .replace(/\<[^\>]+\>/mg, "");
const m: string = qualityScoreString.match(/Current Air Quality:[\s\S]* - (\d+) AQI.*(?=Particle Pollution)/m)[1]
const n: string = m.trim()
const p: string = n.replace(/\s\s+/mg, ", ")

const qualityScore = parseInt(p)
const hour = Meta.currentUserTime.hour()

if (hour < 10 || hour > 13 || qualityScore <= 151) {
  Moretrees.plantTreeForSelf.skip()
  IfNotifications.sendRichNotification.skip()
  Email.sendMeEmail.skip()
}
