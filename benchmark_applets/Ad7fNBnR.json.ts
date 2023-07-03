let User = Trigger.LinkToProfile.replace(/(https?\:\/\/twitter\.com\/)/g, '@');
Twitter.postNewTweet.setTweet("Hey " + User + ", thanks for following me! Have a great day!");