var saveAmount = 10 - parseInt(Monzo.cardPurchase.AmountInAccountCurrency.slice(-1))
Monzo.potDeposit.setAmount("0.0" + saveAmount.toString())