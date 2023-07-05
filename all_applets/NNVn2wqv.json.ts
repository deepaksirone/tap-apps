const bookmark = (Medium.postBookmarkedByYou as any)
const pairs = Object.getOwnPropertyNames(bookmark).map(prop => prop + "||" + bookmark[prop])
Datadotworld.append.setPayload(pairs.join("|||"))