//###################################################################
//Let's define Server Image Filenames & unsplash photo ids
//###################################################################



var serverArray: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38'];    

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








var serverDesc1: Array<string> = ['Melaleuca is best known for its purifying properties. It can be used to cleanse and purify the skin and nails and to support a healthy complexion.  dōTERRA Touch makes application simple with 10 mL roll-ons. It is ideal for children and adults.','This is the perfect companion to a healthy lifestyle, the doTERRA Athletes kit can help support healthy athletic activity, while counteracting the taxing effects of exercise on the body.On Guard 5 mL ,Peppermint 5 mL ,Melaleuca 5 mL ,Deep Blue Rub, Lavender 5 mL,Breathe 5 mL', 'Rosemary is an aromatic, evergreen shrub whose leaves are frequently used to flavor foods such as stuffing, pork, roast lamb, chicken, and turkey. Along with its culinary applications, Rosemarys herbaceous and energizing scent is frequently used for diffusing.', 'Spinach Pesto- 1/2 C Toasted Pine Nuts 2-3 Cups Spinach 1 Cup grated Parmesan Cheese 2 Tsp minced garlic 1/2-1 cup Olive Oil 1 Drop Basil Oil 1 Drop Lemon Oil. Combine in food processor until the mixture is the consistency you would like. Add more Olive Oil to reach desired consistency. Serve Immediately or chill in refrigerator if desired. Great with chips, on pizza, in salads or sandwiches.', 'Helichrysum italicum is a small perennial herb with narrow, silver leaves and flowers that form a cluster of golden yellow, ball-shaped blossoms. Helichrysum is a flower from the Asteraceae, or Daisy, family. The oil is extracted from the fresh flowers by steam distillation and used for a variety of purposes.', 'Lavender has been used and cherished for centuries for its unmistakable aroma and myriad benefits. Which can you always find in your house?  The 15mL bottle or do you prefer the 10mL Roll-on? Either way its a win with the many benefits Lavender has.', 'dōTERRA Touch(R) Kit with nine of our most popular oils in a base of Fractionated Coconut Oil, the doTERRA Touch Kit combines the best benefits found in essential oils, with the goal of protecting sensitive skin. Each come in a 10mL roll-on bottle.', 'Marjoram was known to the Greeks and Romans as a symbol of happiness. Start your Monday with as much happiness as possible!', 'Here is a great tip and another helpful use for Lemon oil. Try washing your fruits and vegetables with a few drops of Lemon essential oil.', 'Did you know that Coriander and Cilantro come from the same plant? Coriander comes from the seeds of the cilantro plant and Cilantro comes from the leaves.', 'Experience the esteemed fragrance and the myriad benefits of Jasmine oil in a convenient roll-on. Jasmine Touch combines Fractionated Coconut Oil and Jasmine absolute for gentle application and multiple uses. Jasmine Touch can be applied to pulse points for a calming, yet euphoric aroma that uplifts mood and promotes a positive outlook.', 'Chamazulene, a chemical component in Blue Tansy, provides the characteristic indigo color and is recognized for its skin soothing benefits. At the same time, the main chemical component Sabinene helps diminish the appearance of blemishes. Uplifting to the mood, Blue Tansy provides a sweet aroma to fill any room. Its perfect for massaging into skin with fractionated coconut oil or lotion after a long day of work or intense exercise to aid the body in the natural recovery process.', 'Melaleuca  touch is Melaleuca in a base of Fractionated Coconut Oil. dōTERRA Touch makes application simple with 10 mL roll-ons. It is ideal for children and adults. Theyre ready to use so that you can start benefiting from essential oils immediately. Melaleuca is best known for its purifying properties. It can be used to cleanse and purify the skin and nails and to support a healthy complexion.','Cardamom is added to traditional Indian sweets and teas for its cool, minty aroma and flavor. Add internally as part of a daily health regimen.', 'Black pepper can soothe anxious feelings. When you are feeling anxious, you can inhale or diffuse this oil.', 'Renowned for its cleansing and invigorating abilities, Lemon is a top-selling dōTERRA favorite because of its versatility. Whether it is used as a natural cleaning agent in the home or to brighten a room with its invigorating aroma, Lemon essential oil holds countless benefits for any user.', 'Frankincense is a precious oil and has numerous uses for skin, healthy cellular function support and overall wellness, but did you know you can apply it after a long day for a warming and soothing effect? Use it under your feet after your workout to promote feelings of relaxation and relieve minor muscle pain following exercise.', 'Ancient records show that Myrrh was deemed so valuable that at times it was valued at its weight in gold.', 'Cassia and Thyme oil can both be used in cooking and recipes. Cassia can also be used as a replacement for cinnamon in pies and breads or by itself in a myriad of entrees and desserts.', 'The dōTERRA Emotional Aromatherapy(TM) System covers a wide range! From spicy to sweet, the aromas are vastly different but will help support you through whatever youre going through that day. Use this wheel to find out which one you want to use.', 'Grapefruit essential oil can provide an uplifting environment due to its invigorating and energizing aroma. Add 3 to 4 drops to your diffuser and enjoy!', 'Copaiba has many uses, have you tried this? Taken internally, Copaiba essential oil supports the health of the cardiovascular, immune, digestive, nervous, and respiratory systems. *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.', 'All of these oils can be helpful for promoting full, healthy-looking hair. Which one have you tried?', 'This diffuser blend is called Fruit Basket! Try it and you will see why. 3 drops Wild Orange, 3 drops Grapefruit, 2 drops lemon, 1 drop Bergamot. Enjoy!', 'Derived from the branches of the tall evergreen tree, Cypress essential oil has a fresh, clean aroma thats energizing and refreshing. Cypress is frequently used in spas and by massage therapists. Cypress contains monoterpenes, making it beneficial for oily skin conditions. It has a grounding, yet stimulating effect on the emotions, making it a popular oil to diffuse during times of transition or loss.', 'Did you have too many sweets this week? DigestZen is known as dōTERRAs “tummy tamer” blend due to its ability to aid in digestion, soothe stomach upset, and maintain overall digestive health.', 'Summer travel is right around the corner. DigestZen(R) is great to have on hand if stomach upset occurs. It is a healthy, natural, and gentle way to soothe an upset stomach.', 'doTERRA Breathe(R) maintains feelings of clear airways and easy breathing while minimizing the effects of seasonal threats. Trying adding Fennel for some extra aroma and respiratory relief in your diffuser at night.', 'doTERRA Breathe products can be used in so many ways. Diffuse, inhale directly from palms, or rub on chest or feet. If you want a convenient way to take it with you try the doTERRA Breathe Vapor Stick, or doTERRA Breathe Respiratory Drops.', 'DDR Prime Essential Oil Cellular Complex is a proprietary blend of essential oils that supports healthy cellular integrity.* The blend includes Clove, Thyme, and Wild Orange essential oils providing powerful antioxidants that help protect against oxidative stress. It also includes essential oils from Frankincense, Lemongrass, Summer Savory, and Niaouli.*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.', 'Grapefruit essential oil can provide an uplifting environment due to its invigorating and energizing aroma, while acting as a purifying agent when added to a skin care routine.', 'The weather is warming up! That means its time to get outside! Dont forget your outdoor blend, TerraShield(R). It comes in this convenient 30mL spray bottle, it is ready to go wherever you do! TerraShield(R) Outdoor Blend contains powerful essential oils and other plant oils known to provide outdoor protection in a natural, safe way.', 'Deep Blue(R) Soothing Blend is formulated to soothe and cool, doTERRA Deep Blue(R) is an enriched blend of oils perfect for a massage after a long day or an intense workout. Do your goals include being active this weekend? The 10mL roll-on is a great way to take this oil with you anywhere.', 'Purify is an exclusive combination of essential oils that purify and eradicate odors in a natural, safe way. This uplifting blend combines citrus and pine essential oils that leave an airy, fresh scent on surfaces and in the air.', 'dōTERRA Forgive(R)  Renewing Blend The fresh, woody aroma helps to counteract emotions of anger and guilt, while promoting the liberating feelings of contentment, relief, and patience.', 'Blue Tansy, also referred to as Moroccan Tansy, is an annual yellow-flowered Mediterranean plant found in northern Morocco. Chamazulene, a chemical component in Blue Tansy, provides the characteristic indigo color and is recognized for its skin soothing benefits. Its perfect for massaging into skin with fractionated coconut oil or lotion after a long day of work or intense exercise to aid the body in the natural recovery process.', 'Clove has been used for years in dental preparations, candy, and gum for its flavor and ability to cleanse the mouth, yet it provides a myriad of benefits. Clove essential oil is also a stimulating and energizing oil that produces a warm, woody aroma.', 'Derived from unique star-shaped flowers, Ylang Ylang is often used to support healthy skin and hair, while simultaneously providing a calming effect and promoting a positive outlook.'];



var numNum = Number(randServer);
 var serverArrayTitleToNum = numNum - 1;
var randServerDesc1 = serverDesc1[serverArrayTitleToNum];














var serverDesc2: Array<string> = ['🌻 Link in bio!','Check out the link in our bio!','Have you checked out the link in our bio yet?','More info from the link in our bio!', 'Want a discount? Link in our bio!','Check out the link in the bio.','Link in Bio!☀️','','','',''];    

var randServerDesc2 = serverDesc2[Math.floor(Math.random() * serverDesc2.length)];


var serverDesc3: Array<string> = [' #wellness #natural #aromatherapy #doterra #allnatural', ' #anxietyrelief #organic #skincare #health #healthyliving', ' #holistic #healthy #yoga #plantbased #yoga', ' #oils #lifestyle #meditation #selfcare #love', ' #doterraessentialoils #selflove #momlife #cleanliving #naturalbeauty', ' #naturalliving #naturalhealth #beauty #healthylifestyle', ' ', ' ', ' ', ' ', ' '];    

var randServerDesc3 = serverDesc3[Math.floor(Math.random() * serverDesc3.length)];



//###################################################################
//Let's decide if this will be an Unsplash Pic or a Server Pic (Self)
//###################################################################



var maximum = 8;
var minimum = 1;
var randomNumero = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

if (randomNumero == 9) {


Buffer.addToBufferWithPhoto.setPhotoUrl("http://essentialoils.education/ig-pic/" + randUnsplash + ".jpg");

Buffer.addToBufferWithPhoto.setMessage(randDesc1 + " " + randDesc2 + " " + randDesc3);

}else{

Buffer.addToBufferWithPhoto.setPhotoUrl("http://essentialoils.education/ig-pic/" + randServer + ".jpg");

Buffer.addToBufferWithPhoto.setMessage(randServerDesc2 + " " + randServerDesc1 + " " + randServerDesc3);


}
