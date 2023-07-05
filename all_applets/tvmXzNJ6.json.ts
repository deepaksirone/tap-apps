var album     = 'Instagram Photos',
		albums : Array<string>    = [ 'Wildlife', 'Landscape', 'Aurora' ],
    src       = GoogleDrive.anyNewPhoto.PhotoUrl,
    str       = GoogleDrive.anyNewPhoto.Filename.replace( '.jpg', '' ),
    link      = "https://www.instagram.com/yukon_strong",
    meta      = str.split( '|' ),
    meta_0: string = meta[0],
    title     = meta_0.trim(),
    meta_1: string = meta[1],
    desc      = meta_1.trim(),
    hashtags  = str.match( /#[a-zA-Z0-9_.-]+/g ).join( " " ),
    split     = desc.split( " #" ),
    notags: string    = "";

// Get Pure description without trailing tags for FB posts
for( let i = split.length; i > 1; i-- )
{
  var split_i_1: string = split[i - 1];
  if( split_i_1.indexOf( " " ) > -1 )
  {
    notags = split.slice( 0, i ).join( " #" );
  }
}

// Detect Album
for( let i = 0, len = albums.length; i < len; i++ )
{
  var albums_i: string = albums[i];
  if ( hashtags.toLowerCase().indexOf( albums_i.toLowerCase()) > -1 )
  {
    album = albums_i; 
    break;
  }
}

//var arr_1: Array<string> = [ notags, "\r\n\r\nvia Instagram "+link ]
_500px.uploadPublicPhotoFromUrl.setPhotoUrl( src )
_500px.uploadPublicPhotoFromUrl.setTitle( title )
//_500px.uploadPublicPhotoFromUrl.setDescription( arr_1.join( " " ))
_500px.uploadPublicPhotoFromUrl.setTags( hashtags.replace( /(\s+#|#)/g, ',' ).substring(1) )

//var arr_2: Array<string> = [ title, notags, "\r\n\r\nvia Instagram "+link ];
FacebookPages.createPhotoPage.setPhotoUrl( src )
//FacebookPages.createPhotoPage.setMessage( arr_2.join( " " ))
FacebookPages.createPhotoPage.setAlbum( album )

//Cant use link shortners for pinterest or post gets blocked
//Pinterest.addAPin.setBoardName( album )
//Pinterest.addAPin.setPhotoUrl( src )
//Pinterest.addAPin.setNote( [ title, desc, hashtags ].join( " " ))
//Pinterest.addAPin.setLink( link )
