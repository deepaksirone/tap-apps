//###################################################################
//Let's define Server Image Filenames & unsplash photo ids
//###################################################################



var serverArray: Array<string> = ['34','35','36','37','38'];    

var randServer = serverArray[Math.floor(Math.random() * serverArray.length)];

var unsplashArray: Array<string> = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33'];    

var randUnsplash = unsplashArray[Math.floor(Math.random() * unsplashArray.length)];



//###################################################################
//Let's define the description parts 1, 2 & 3 for UNSPLASH
//###################################################################



var Desc1: Array<string> = ['Work hard today!', 'Get out there and hustle!', 'We are entrepreneurs!', '', 'Zero to a Hundred...Dollars', 'This week we are gving 110%', 'Business is our middle name', 'Did you give your best yesterday?', 'Are you on track to hit your goals?', 'What can you do better this week?', 'Close, Close, Close!', 'Goals & Vision', 'Yes you are capable to achieve it!', 'Grind & Hustle! Lets go!'];    

var randDesc1 = Desc1[Math.floor(Math.random() * Desc1.length)];


var Desc2: Array<string> = ['We do offer resources - Link in bio', 'Link in bio', 'More about entrepreneurship, link in bio!', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];    

var randDesc2 = Desc2[Math.floor(Math.random() * Desc2.length)];


var Desc3: Array<string> = ['#marketing #onlinemarketer #internetentrepreneur', '#funnels #sales #marketing', '#makemoney #onlinebusiness #onlineincome', ' ','💰','💵','💸','🤑',' ',' ', ' ', ' ', ' ', ' ', ' '];    

var randDesc3 = Desc3[Math.floor(Math.random() * Desc3.length)];


//###################################################################
//Let's define the description parts 1, 2 & 3 for SERVER
//###################################################################



var serverDesc1: Array<string> = ['Youl want to check out this video ☝️', 'Dropping value!', 'Hey check out this video!', 'If you are a entrepreneur watch this video','Check this out!','You are going to love this 💵','Watch this video 🤑'];    

var randServerDesc1 = serverDesc1[Math.floor(Math.random() * serverDesc1.length)];


var serverDesc2: Array<string> = ['Link in bio!','Video link in bio!','Subscribe on YouTube - Link in bio','Vid Link In Bio!', '💰Link to video in bio','Check out the link in the bio','Link in Bio! Keep Hustling!'];    

var randServerDesc2 = serverDesc2[Math.floor(Math.random() * serverDesc2.length)];


var serverDesc3: Array<string> = ['#entrepreneurship #entrepreneur #entrepreneurs', '#makemoney #onlinebusiness #onlineincome', '#business #onlinebusiness #wealth #hustle', ' ', ' ', ' ', ' ', ' ', ' '];    

var randServerDesc3 = serverDesc3[Math.floor(Math.random() * serverDesc3.length)];



//###################################################################
//Let's decide if this will be an Unsplash Pic or a Server Pic (Self)
//###################################################################



var maximum = 8;
var minimum = 1;
var randomNumero = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

if (randomNumero == 1) {


Buffer.addToBufferWithPhoto.setPhotoUrl("http://thetylermorrison.com/ig/temcom/" + randServer + ".jpg");

Buffer.addToBufferWithPhoto.setMessage(randServerDesc1 + " " + randServerDesc2 + " " + randServerDesc3);

}else{

Buffer.addToBufferWithPhoto.setPhotoUrl("http://thetylermorrison.com/ig/temcom/" + randUnsplash + ".jpg");

Buffer.addToBufferWithPhoto.setMessage(randDesc1 + " " + randDesc2 + " " + randDesc3);


}
