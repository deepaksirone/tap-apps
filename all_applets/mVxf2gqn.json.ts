var notification = AndroidDevice.newNotificationFromApp.NotificationTitle
var date = AndroidDevice.newNotificationFromApp.ReceivedAt

var n = notification.lastIndexOf("by")
var track = notification.substring(0, n)
var artist = notification.substring(n+3)

// Log song to Google Sheets with track, artist, date
var row = track + " ||| " + artist + " ||| " + date
GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(row)

// Add song to Spotify playlist (if found)
Spotify.addATrackToAPlaylist.setSearchQuery(track)
Spotify.addATrackToAPlaylist.setArtistName(artist)