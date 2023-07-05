if ( Monzo.cardPurchase.Category == "Eating Out" ) {
  Monzo.potWithdraw.setAmount(Monzo.cardPurchase.AmountInAccountCurrency)
} else {
  Monzo.potWithdraw.skip("Not an Eating Out Purchase")
}