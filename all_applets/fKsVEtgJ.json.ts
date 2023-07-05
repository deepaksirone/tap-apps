var s_length = parseInt(AndroidPhone.placeAPhoneCall.CallLength);
var endTime = moment(moment(AndroidPhone.placeAPhoneCall.OccurredAt, 'MMMM dd, YYYY at hh:mmA').add(moment(AndroidPhone.placeAPhoneCall.CallLength, 'seconds')), 'MMMM dd, YYYY at hh:mmA').toString();
var min = moment(moment(AndroidPhone.placeAPhoneCall.OccurredAt, 'MMMM dd, YYYY at hh:mmA').add(1,'minutes'), 'MMMM dd, YYYY at hh:mmA').toString();

if(s_length>120){
  GoogleCalendar.addDetailedEvent.setEndTime(endTime);
}else{
  GoogleCalendar.addDetailedEvent.setEndTime(min);
}