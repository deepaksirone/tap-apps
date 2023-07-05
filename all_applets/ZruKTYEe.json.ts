const decimal = parseFloat(Roostermoney.cardSpend.SpendAmountDecimal);
const rounded = Math.ceil(decimal * 10) / 10;
const roundUp10p = ((rounded * 100) - (decimal * 100)) / 100;
Roostermoney.transfer.setAmount("" + roundUp10p.toString());
