let currentHour = Meta.currentUserTime.hour();

if (currentHour < 16 || currentHour >= 19) {
Spotify.startPlayback.skip();
}
 // Update 16 and 19 to change the time window that this applet will run based on a 24 hour clock, eg 9 for 9 am and 21 for 9 pm