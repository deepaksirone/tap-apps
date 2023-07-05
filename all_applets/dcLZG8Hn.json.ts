if ( Monzo.cardPurchase.Category == "Entertainment" ) {
  Monzo.potWithdraw.setAmount(Monzo.cardPurchase.AmountInAccountCurrency)
} else {
  Monzo.potWithdraw.skip("Not an Entertainment Purchase")
}