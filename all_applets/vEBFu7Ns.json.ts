// if the date is 22/05/2019, we should deposit 46p (22 + 5 + 19)

var momentObject = Meta.currentUserTime

var date_of_month = momentObject.date()
var month = momentObject.month() + 1
var year = Number(momentObject.format("YY"))

var depositAmount = ((date_of_month + month + year) / 100).toFixed(2)
var depositAmountString = depositAmount

Monzo.potDeposit.setAmount(depositAmountString);
