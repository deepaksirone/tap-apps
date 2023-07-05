var lengthOfCall = parseInt(AndroidPhone.placeAPhoneCall.CallLength);
lengthOfCall = Math.ceil(lengthOfCall / 60);
GoogleCalendar.quickAddEvent.setQuickAdd(
  "Call to " + AndroidPhone.placeAPhoneCall.ContactName + " at " + AndroidPhone.placeAPhoneCall.ToNumber + " for " + lengthOfCall.toString() + " minutes"
);
