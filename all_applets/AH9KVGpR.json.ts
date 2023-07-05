var text = Instagram.anyNewPhotoByYou.Caption.replace(/(\s#\S+)*$/g, "") + " " + Instagram.anyNewPhotoByYou.Url;
Twitter.postNewTweetWithImage.setTweet(text);