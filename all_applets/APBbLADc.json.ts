var album     = 'Instagram Photos',
    src       = GoogleDrive.anyNewPhoto.PhotoUrl,
    str       = GoogleDrive.anyNewPhoto.Filename.replace( '.jpg', '' ),
    link      = 'https://www.instagram.com/djsumanik',
    insta     = "<br><br><a href='https://www.instagram.com/djsumanik'>via Instagram</a>",
		found     = false,
    meta: Array<string>   = str.split( '|' ),
    meta_0: string     = meta[ 0 ],
    title: string = meta_0.trim(),
    meta_1: string  = meta[1],
    desc      = meta_1.trim(),
    hashtags  = str.match( /#[a-zA-Z0-9_.-]+/g ).join( " " ),
    tags      = hashtags.replace( /#/g, ',' ),
    split     = desc.split(" #"),
    notags    = desc;
    
// Strip out true tags
for(let i = split.length; i > 1; i--)
{
  let s: string = split[i - 1];
  if(s.indexOf(" ") > -1)
  {
    notags = split.slice(0, i).join(" #");
  }
}

Flickr.uploadPublicPhotoFromUrl.setPhotoUrl( src );
Flickr.uploadPublicPhotoFromUrl.setTitle( title );
Flickr.uploadPublicPhotoFromUrl.setDescription( desc );
Flickr.uploadPublicPhotoFromUrl.setTags( tags );

Tumblr.createPhotoPost.setSourceUrl( src );
//let arr: Array<string> = [ title, notags, insta ];
//Tumblr.createPhotoPost.setCaption( arr.join( " " ));
Tumblr.createPhotoPost.setTags( tags );

//let arr1: Array<string> = [ title, desc, "via Instagram " + link ];
//Twitter.postNewTweetWithImage.setTweet( arr1.join( " " ))
Twitter.postNewTweetWithImage.setPhotoUrl( src )
