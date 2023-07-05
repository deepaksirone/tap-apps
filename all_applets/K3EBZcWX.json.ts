var month = Meta.currentUserTime.month()
var h1 = 21
var h2 = 6

if (month == 1 || month == 12){
  h1 = 18
  h2 = 8
}
else if (month == 2 || month == 11){
  h1 = 19
  h2 = 7
}
else if (month == 3 || month == 4 || month == 10){
  h1 = 20
  h2 = 7
}
else if (month == 5 || month == 9 ){
  h1 = 21
  h2 = 7
}
else if (month == 6 || month == 7 || month == 8){
  h1 = 22
  h2 = 6
}


if(Meta.currentUserTime.hour() > h2 && Meta.currentUserTime.hour()< h1){
  Kasa.turnOn.skip()
}