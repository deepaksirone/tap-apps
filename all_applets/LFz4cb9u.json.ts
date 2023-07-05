var d = Meta.triggerTime
var foreignCurrency = false;
if (Monzo.cardPurchase.AccountCurrencyCode != Monzo.cardPurchase.LocalCurrencyCode) {
  foreignCurrency = true;
}

var message = Monzo.cardPurchase.AccountCurrencySymbol + Monzo.cardPurchase.AmountInAccountCurrency + " ";

if (foreignCurrency) {
  message += Monzo.cardPurchase.LocalCurrencySymbol + Monzo.cardPurchase.AmountInLocalCurrency + " (" + Monzo.cardPurchase.LocalCurrencyCode + ") ";
}

message += "on " + d.format("dddd") + " at " + d.format("h:mm A");

EmailDigest.sendWeeklyEmail.setMessage(message);