var distance = parseInt(Strava.newActivityByYou.DistanceMeters);
var amount = distance/1000;
Monzo.potDeposit.setAmount(amount.toFixed(2));