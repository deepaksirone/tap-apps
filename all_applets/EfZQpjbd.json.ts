var amount = parseFloat(Monzo.cardPurchase.AmountInAccountCurrency);
var remainder = (Math.ceil(amount*2)/2) - amount
var roundedRemainder = remainder.toFixed(2);
if (amount > 0 && remainder > 0) {
  Monzo.potDeposit.setAmount(roundedRemainder);
}