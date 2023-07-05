var format = 'hh:mm:ss'

var beforeTime = moment('11:30:00', format);
var afterTime = moment('13:30:00', format);

if (Meta.triggerTime.isBetween(beforeTime, afterTime) && Meta.triggerTime.isoWeekday() < 6) {
  var amount = parseFloat(Monzo.cardPurchaseWithMerchant.AmountInAccountCurrency) * Math.pow(1.000191780821917808,3650);
  var url = "https://en-gb.calculatestuff.com/financial/compound-interest-calculator?initial_investment=" + parseFloat(Monzo.cardPurchaseWithMerchant.AmountInAccountCurrency).toString() + "&interest_rate=7.000&regular_investment=0.00&investment_frequency=1&term=10&compound_frequency=1&start_date=" + Meta.triggerTime.format("DD-MM-YYYY") + "#results"
  IfNotifications.sendRichNotification.setMessage("You just wasted a potential " + Monzo.cardPurchaseWithMerchant.AccountCurrencySymbol + amount.toFixed(2) + " by buying your lunch");
  IfNotifications.sendRichNotification.setLinkUrl(url);
}
else
{
  IfNotifications.sendRichNotification.skip();
}
