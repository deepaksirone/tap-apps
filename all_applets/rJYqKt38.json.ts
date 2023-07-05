// (adapted from https://www.reddit.com/r/ifttt/comments/6pdxkg/problem_with_rlistentothis_applet_failing_to_find/dl68wvf/)

// Clean up the song title:
var title = Reddit.newTopPostInSubreddit.Title.trim().replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace('“', '"').replace('”', '"').replace(/&#039;/g, "'").replace(/&lsquo;/g, "'").replace(/&rsquo;/g, "'").replace("‘", "'").replace("’", "'").replace(/&#096;/g, "'").replace("`", "'").replace(/&#180;/g, "'").replace("´", "'");

// Remove square brackets:
if (title.charAt(0) == '[') {
  var closingBracket = title.indexOf(']');
  if (closingBracket > 0) {
    title = title.slice(closingBracket + 1);
  }
}
var title_1: string = title.split('[')[0];
title = title_1.trim()

// Attempt to split the title into the artist and song name:
var separators: Array<string> = [' -- ', ' - - ', '--', '- -', ' — ', ' – ', ' - ', '—', '–', '-'];
var split: Array<string> = []
for (var i = 0; i < separators.length; i++) {
  split = title.split(separators[i]);
  if (split.length == 2) {break;}
}

// If splitting didn't work, search for the polished title as-is:
if (i == separators.length) {
  Spotify.addATrackToAPlaylist.setSearchQuery(title);
}

// Otherwise, search for the artist and song name separately:
else {
  let split_0: string = split[0];
  var artist = split_0.trim();
  let split_1: string = split[1];
  var song = split_1.trim();

  if (artist.slice(-1) == ')') { // (remove trailing parentheses)
    var openingParenthesis = artist.lastIndexOf('(');
    if (openingParenthesis > 0) {
      artist = artist.slice(0, openingParenthesis).trim();
    }
  }

  if (song.slice(-1) == ')') { // (remove trailing parentheses)
    var openingParenthesis = song.lastIndexOf('(');
    if (openingParenthesis > 0) {
      song = song.slice(0, openingParenthesis).trim();
    }
  }

  Spotify.addATrackToAPlaylist.setSearchQuery(song);
  Spotify.addATrackToAPlaylist.setArtistName(artist);
}
