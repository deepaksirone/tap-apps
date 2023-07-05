var t = GoogleAssistant.voiceTriggerWithOneTextIngredient.TextField || ""
Pushbullet.sendLink.setTitle("Search for: " + t)
Pushbullet.sendLink.setUrl("https://www.google.ca/search?q=" + t.replace(/\s/g, "+"))