var album     = 'Instagram Photos',
		albums: Array<string>   = [ 'Wildlife', 'Landscape', 'Aurora' ],
    src       = GoogleDrive.anyNewPhoto.PhotoUrl,
    str       = GoogleDrive.anyNewPhoto.Filename.replace( '.jpg', '' ),
    link      = 'https://www.instagram.com/TundraTechYukon',
    meta      = str.split( '|' ),
    title     = meta[ 0 ].trim(),
	  desc      = meta[ 1 ].trim(),
    hashtags  = str.match( /#[a-zA-Z0-9_.-]+/g ).join( " " ),
    split     = desc.split( " #" ),
    notags    = desc;

// Get Pure description without trailing tags for FB posts
for( let i = split.length; i > 1; i-- )
{
  if( split[ (i - 1) ].indexOf( " " ) > -1 )
  {
    notags = split.slice( 0, i ).join( " #" );
  }
}

// Detect Album
for( let i = 0, len = albums.length; i < len; i++ )
{
  if ( hashtags.toLowerCase().indexOf( albums[ i ].toLowerCase()) > -1 )
  {
    album = albums[ i ]; 
    break;
  }
}

_500px.uploadPublicPhotoFromUrl.setPhotoUrl( src )
_500px.uploadPublicPhotoFromUrl.setTitle( title )
_500px.uploadPublicPhotoFromUrl.setDescription( [ notags, "\r\n\r\nvia Instagram "+link ].join( " " ))
_500px.uploadPublicPhotoFromUrl.setTags( hashtags.replace( /(\s+#|#)/g, ',' ).substring(1) )

FacebookPages.createPhotoPage.setPhotoUrl( src )
FacebookPages.createPhotoPage.setMessage( [ title, notags, "\r\n\r\nvia Instagram "+link ].join( " " ))
FacebookPages.createPhotoPage.setAlbum( album )

//Cant use link shortners for pinterest or post gets blocked
//Pinterest.addAPin.setBoardName( album )
//Pinterest.addAPin.setPhotoUrl( src )
//Pinterest.addAPin.setNote( [ title, desc, hashtags ].join( " " ))
//Pinterest.addAPin.setLink( link )
