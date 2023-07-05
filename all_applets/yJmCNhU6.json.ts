if(parseFloat(DCUPlaidIFTTT.newTransactions.Amount) == 1.06 && DCUPlaidIFTTT.newTransactions.TransactionDetail.toLowerCase().search("cumberland") >= 0){
  Sms.sendMeText.setMessage("Enjoy your coffee from Cumberland Farms!");
}
else{
  Sms.sendMeText.skip();
}
