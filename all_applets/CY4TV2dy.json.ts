var week_of_year = Meta.currentUserTime.format('w');
var week_number = parseInt(week_of_year); 
var amount= (53-week_number);
Monzo.potDeposit.setAmount(amount.toFixed(2));