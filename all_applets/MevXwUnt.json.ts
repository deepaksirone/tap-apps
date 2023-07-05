const post = (Reddit.newPostFromSearchReddit as any)
const pairs = Object.getOwnPropertyNames(post).map(prop => prop + "||" + post[prop])
Datadotworld.append.setPayload(pairs.join("|||"))