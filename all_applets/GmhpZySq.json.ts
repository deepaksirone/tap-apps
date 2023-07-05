var timeOfDay = Meta.currentUserTime.hour();

    if (timeOfDay >= 14 || timeOfDay <= 8 ) Powerview.executeSceneCollection.skip()