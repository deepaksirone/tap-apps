// Clean up the song title:
var title = Reddit.newHotPostInSubreddit.Title.trim()
title = title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'")

if (title.charAt(0) == '[' && title.indexOf("]") > 0) {
  title = title.slice(0, title.indexOf("]"))
}

var title_sp: string = title.split('[')[0];
title_sp = title_sp.trim()

// Try double dash (official format), fallback to single dash:
var titleSplit: Array<string> = title_sp.split("--")
if (titleSplit.length != 2) {
  titleSplit = title_sp.split("-")
}

// Perform action:
if (titleSplit.length == 2) {
  //var artist_0: string = titleSplit[0];
  //var artistName: string = artist_0.trim();
  //var track_1: string = titleSplit[1];
  //var trackName = track_1.trim();
  Spotify.addATrackToAPlaylist.setSearchQuery(titleSplit[0])
  Spotify.addATrackToAPlaylist.setArtistName(titleSplit[1])

} else if (titleSplit.length > 2) {

  Spotify.addATrackToAPlaylist.setSearchQuery(title_sp)

} else {

  Spotify.addATrackToAPlaylist.skip()
}
