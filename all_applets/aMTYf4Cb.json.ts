var addedBy = Spotify.newTrackAddedToPlaylist.AddedBy;
var trackName = Spotify.newTrackAddedToPlaylist.TrackName;
var trackURL = Spotify.newTrackAddedToPlaylist.TrackURL;
var artistName = Spotify.newTrackAddedToPlaylist.ArtistName;
var albumName = Spotify.newTrackAddedToPlaylist.AlbumName;
var playlistName = Spotify.newTrackAddedToPlaylist.PlaylistName;
Gmail.sendYourselfAnEmail.setSubject("New Track Added to Playlist " + playlistName + " by " + addedBy);
Gmail.sendYourselfAnEmail.setBody("Your friend " + addedBy + " added a new track to the Playlist " + playlistName + "! "
 + "The name of the song is: " + trackName 
 + "The artist of the song is: " + artistName
 + "The album the song is in is: " + albumName
 + "Listen to it here!: " + trackURL);
