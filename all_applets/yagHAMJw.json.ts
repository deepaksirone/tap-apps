var weekDay = Meta.currentUserTime.day();
var Hours = Meta.currentUserTime.hour();
//var Minutes = Meta.currentUserTime.minute();
//var DD = new Date();
//var Hours = DD.getHours();
//var Minutes = DD.getMinutes();
//var weekDay = DD.getDay();
//var HM = Hours +""+ Minutes;

var H_from = 18; 
var H_to = 20;
var WD_from = 1;
var WD_to = 5;

//var HM_fromM = "0"; 
//document.write(HM+"/"+Hours+"/"+Minutes+"/"+weekDay+"//");

if((Hours >= H_from && Hours <= H_to) && (weekDay >= WD_from && weekDay <= WD_to)){
	//document.write(1);
}else{
  var r = "Hours:"+Hours.toString()+"/weekDay:"+weekDay.toString()+"//H_from_to:"+H_from.toString()+"-"+H_to.toString()+"/WD_from_to:"+WD_from.toString()+"-"+WD_to.toString();
	Box.uploadFileFromUrlBox.skip(r);
}
