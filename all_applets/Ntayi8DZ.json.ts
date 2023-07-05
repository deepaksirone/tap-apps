var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 22 || timeOfDay < 8 || (timeOfDay%2)==1 ) {
Pushbullet.sendNote.skip()
}