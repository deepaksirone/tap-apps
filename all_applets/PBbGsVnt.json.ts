const tweet = (Twitter.newTweetByUser as any)
const pairs = Object.getOwnPropertyNames(tweet).map(prop => prop + "||" + tweet[prop])
Datadotworld.append.setPayload(pairs.join("|||"))