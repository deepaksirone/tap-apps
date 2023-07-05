var week_of_year = Meta.currentUserTime.format('w');
var amount = parseInt(week_of_year);
Monzo.potDeposit.setAmount(amount.toFixed(2));