var Address = Monzo.cardPurchase.MerchantAddress

  //Test for address else it's an Online Transaction
if (Address.length <= 0 || Address == "," || Address ==", ," || Address ==", , "|| Address ==", ") {
     GoogleCalendar.addDetailedEvent.setLocation("Online Transaction")
  }
else {
    GoogleCalendar.addDetailedEvent.setLocation(Monzo.cardPurchase.MerchantName + ", " + Monzo.cardPurchase.MerchantAddress)
  }