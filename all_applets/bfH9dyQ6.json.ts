var Merchant = Monzo.cardPurchase.MerchantName
var Currency = Monzo.cardPurchase.LocalCurrencyCode
var ForeignMerchants: Array<string> = ['atm'];
var CurrencyCode: Array<string> = ['gbp'];

// any matches will return 0 or higher, eg first in list will be 0, next 1, etc
if ((CurrencyCode.indexOf(Currency.toLowerCase()) > -1) || (ForeignMerchants.indexOf(Merchant.toLowerCase()) == -1)) {
  //skip if any currency is matched, OR if any merchants arent found
  Monzo.potWithdraw.skip("Not a #TravelMoney purchase")
}
