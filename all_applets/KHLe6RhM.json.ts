var format = 'hh:mm:ss'

var beforeTime = moment('11:30:00', format);
var afterTime = moment('13:30:00', format);

if (Meta.triggerTime.isBetween(beforeTime, afterTime) && Meta.triggerTime.isoWeekday() < 6) {
  var PMT = parseFloat(Monzo.cardPurchaseWithMerchant.AmountInAccountCurrency) * 20;
  var r = 0.07;
  var n = 12;
  var t = 10;
  var amount = PMT * ((Math.pow((1 + r/n),(n*t)) - 1) / (r/n)) * (1+r/n)
  var url = "https://en-gb.calculatestuff.com/financial/compound-interest-calculator?initial_investment=0&interest_rate=7.000&regular_investment=" + PMT.toString() + "&investment_frequency=1&term=10&compound_frequency=2&start_date=" + Meta.triggerTime.format("DD-MM-YYYY") + "#results"
  IfNotifications.sendRichNotification.setMessage("If you buy your lunch every work-day in the next 10 years, you've potentially wasted " + Monzo.cardPurchaseWithMerchant.AccountCurrencySymbol + amount.toFixed(2));
  IfNotifications.sendRichNotification.setLinkUrl(url);
}
else
{
  IfNotifications.sendRichNotification.skip();
}
