var album     = 'Instagram Photos',
    src       = GoogleDrive.anyNewPhoto.PhotoUrl,
    str       = GoogleDrive.anyNewPhoto.Filename.replace( '.jpg', '' ),
    link      = 'https://www.instagram.com/TundraTechYukon',
    insta     = "<br><br><a href='https://www.instagram.com/TundraTechYukon'>via Instagram</a>",
    meta      = str.split( '|' ),
    meta_0: string = meta[0],
    title     = meta_0.trim(),
    meta_1: string = meta[1],
    desc: string      = meta_1.trim(),
    hashtags  = str.match( /#[a-zA-Z0-9_.-]+/g ).join( " " ),
    tags      = hashtags.replace( /#/g, ',' ),
    split     = desc.split(" #"),
    notags    = desc;
    
// Strip out true tags
for(let i = split.length; i > 1; i--)
{
  let split_i_1: string = split[i - 1];
  if(split_i_1.indexOf(" ") > -1)
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
