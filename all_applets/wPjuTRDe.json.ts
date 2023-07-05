if (Monzo.cardPurchase.AccountCurrencyCode == Monzo.cardPurchase.LocalCurrencyCode) {
  Monzo.potWithdraw.skip();
}

Monzo.potWithdraw.setAmount(Monzo.cardPurchase.AmountInAccountCurrency)