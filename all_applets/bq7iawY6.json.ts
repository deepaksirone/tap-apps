var album     = 'Instagram Photos',
    src       = GoogleDrive.anyNewPhoto.PhotoUrl,
    str       = GoogleDrive.anyNewPhoto.Filename.replace( '.jpg', '' ),
    link      = 'https://www.instagram.com/yukon_strong',
    insta     = "<br><br><a href='https://www.instagram.com/yukon_strong'>via Instagram</a>",
		found     = false,
    meta      = str.split( '|' ),
    title     = meta[ 0 ].trim(),
	  desc      = meta[ 1 ].trim(),
    hashtags  = str.match( /#[a-zA-Z0-9_.-]+/g ).join( " " ),
    tags      = hashtags.replace( /#/g, ',' ),
    split     = desc.split(" #"),
    notags    = desc;
    
// Strip out true tags
for(let i = split.length; i > 1; i--)
{
  if(split[i - 1].indexOf(" ") > -1)
  {
    notags = split.slice(0, i).join(" #");
  }
}

Flickr.uploadPublicPhotoFromUrl.setPhotoUrl( src );
Flickr.uploadPublicPhotoFromUrl.setTitle( title );
Flickr.uploadPublicPhotoFromUrl.setDescription( desc );
Flickr.uploadPublicPhotoFromUrl.setTags( tags );

Tumblr.createPhotoPost.setSourceUrl( src );
//Tumblr.createPhotoPost.setCaption( [ title, notags, insta ].join( " " ));
Tumblr.createPhotoPost.setTags( tags );

//Twitter.postNewTweetWithImage.setTweet( [ title, desc, "via Instagram " + link ].join( " " ))
Twitter.postNewTweetWithImage.setPhotoUrl( src )
