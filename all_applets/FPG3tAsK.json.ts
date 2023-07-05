var amount = parseFloat(Monzo.cardPurchase.AmountInAccountCurrency);
var c = Math.ceil(amount);
var remainder = c - amount;
var roundedRemainder = remainder.toFixed(2);
if (amount > 0 && remainder > 0) {
  Monzo.potDeposit.setAmount(roundedRemainder);
}