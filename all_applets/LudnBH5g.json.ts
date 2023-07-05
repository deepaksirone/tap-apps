const tweet = (Twitter.newFavoriteTweet as any)
const pairs = Object.getOwnPropertyNames(Twitter.newFavoriteTweet).map(prop => prop + "||" + tweet[prop])
Datadotworld.append.setPayload(pairs.join("|||"))