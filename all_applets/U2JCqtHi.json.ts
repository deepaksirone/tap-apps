if ( Monzo.cardPurchase.Category == "Transport" ) {
  Monzo.potWithdraw.setAmount(Monzo.cardPurchase.AmountInAccountCurrency)
} else {
  Monzo.potWithdraw.skip("Not a Transport Purchase")
}