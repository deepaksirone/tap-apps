// Set up specific show schedule (PST) from http://kexp.org/schedule
const showDayOfWeek = 2
const showHourStart = 18 
const showHourEnd = 21
const playlistPrefix = "KEXP - Wo'Pop - "

// TODO -- as per activity log on IFTTT, looks like it is converting twitter's raw UTC `created_at` to user local time. Figure out what utc offset translation needs to happen to convert this timestamp string to PST time (above schedule consts are set in PST). If the conversion of timestamp is to the timezone of user issuing the tweet this is a non-issue
let tweetTime = moment(Twitter.newTweetByUser.CreatedAt, "MMMM DD, YYYY at hh:mmA")

let tweetDayOfWeek = tweetTime.day()
let tweetHourOfDay = tweetTime.hour()


if (tweetDayOfWeek == showDayOfWeek
    && tweetHourOfDay >= showHourStart
    && tweetHourOfDay < showHourEnd ) {
  // let playlistName =  playlistPrefix + tweetTime.format('YYYY-MM-DD')

  let playlistName = playlistPrefix + 'Archive'
  Spotify.addATrackToAPlaylist.setPlaylist(playlistName)
  // TODO: Why is IFTTT giving back HTML encoded bits in Text?
  let decodedTrackText = Twitter.newTweetByUser.Text.replace(/&amp;/g, '&');
  let trackInfoParts = decodedTrackText.split(' - ')
  // Pattern guess on #kexpnowplaying tweets -- 
  // e.g. 'Shake Some Action! - Waiting For The Sun - Crash Through or Crash (2017)'
  // 0: Artist
  // 1: Song name
  // 2: (sometimes missing) album name (YYYY of release)
  let artist_name: string = trackInfoParts[0];
  let search_query: string = trackInfoParts[1];
  Spotify.addATrackToAPlaylist.setArtistName(artist_name)
  let songSearchQuery = search_query.replace(/\(([^\)])+\)/g, '')
  // Skip album name;  trust Spotify's top result to give the best match
  // if (trackInfoParts.length > 2) {
  //   songSearchQuery += ' ' + trackInfoParts[2].replace(/\(\d{4}\)/, '')
  // }
  Spotify.addATrackToAPlaylist.setSearchQuery(songSearchQuery)
}
else {
  // Skip saving song to playlist if this is outside of show timings
  Spotify.addATrackToAPlaylist.skip("Not interested in this")
}
