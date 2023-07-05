

// if(Monzo.cardPurchase.Category.toLowerCase() !== "personal care"){
//   MakeItDonate.makeADonation.skip();
// }

var userName = GoogleDocs.newDocument.Body.split("::content::")[0];
Twitter.postNewTweet.setTweet("Hi " + userName + " International Men's Day is on 19th November. Donate to Refuge: https://www.refuge.org.uk/");