var treeQuantity = 0;

//strip all other chars from the fuel economy to just get the number of miles per gallon
var fuelEcon = parseFloat(Bouncie.fuelEcon.FuelEcon.replace(/[^\d.-]/g, ''));

//strip all other chars from the last closing price of crude oil to just get the price per barrell in dollars
var oilPrice = parseFloat(Finance.historyOfClosingPrices.Price.replace(/[^\d.-]/g, ''));

//add additional trees the worse the fuel economy for the trip was
if (fuelEcon <= 10){
  treeQuantity += 4;
}
else if(fuelEcon <= 20){
  treeQuantity += 3;
}
else if(fuelEcon <= 30){
  treeQuantity += 2;
}
else {
  treeQuantity += 1;
}

//add additional trees if the price of crude oil is low, since that means there are more drivers and less incentives to drive economically and eco-friendly
if (oilPrice <= 10){
  treeQuantity += 6;
}
else if(oilPrice <= 20){
  treeQuantity += 5;
}
else if(oilPrice <= 30){
  treeQuantity += 4;
}
else if(oilPrice <= 40){
  treeQuantity += 3;
}
else if(oilPrice <= 50){
  treeQuantity += 2;
}
else if(oilPrice <= 60){
  treeQuantity += 1;
}

//Set the number of trees we will plant 
Moretrees.plantTreeForSelf.setQuantity(treeQuantity.toString());

//create the message we will send in the notification
var message = "The recent trip in your " + Bouncie.fuelEcon.VehicleName + " had a fuel economy of " + Bouncie.fuelEcon.FuelEcon + " MPG, which is less than ideal for your vehicle. Don't worry! We planted " + treeQuantity.toString() + " new trees to offset all the additional C02 this trip added to our atmosphere.";

//Set the message body
IfNotifications.sendNotification.setMessage(message);
