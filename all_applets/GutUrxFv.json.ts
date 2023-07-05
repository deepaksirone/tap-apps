var day_of_year = Meta.currentUserTime.format('DDD');
var amount = parseInt(day_of_year) / 100;
Monzo.potDeposit.setAmount(amount.toFixed(2));