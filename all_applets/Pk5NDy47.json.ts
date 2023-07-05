var START_TIME = 20;
var END_TIME = 6;

var hourOfDay = Meta.currentUserTime.hour();


if (hourOfDay <= START_TIME && hourOfDay >= END_TIME){
 Harmony.startActivity.skip();
}