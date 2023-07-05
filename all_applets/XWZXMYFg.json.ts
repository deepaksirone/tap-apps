const merchant = Monzo.cardPurchase.MerchantName.toLowerCase();
if (!merchant.match(/burrito/g) || !merchant.match(/pancho/g) || !merchant.match(/barburrito/g) || !merchant.match(/mexican/g)) {
  Twitter.postNewTweet.skip();
}
