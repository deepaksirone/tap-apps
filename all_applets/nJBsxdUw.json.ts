var lengthOfCall = Number(AndroidPhone.receiveAPhoneCall.CallLength);
lengthOfCall = Math.ceil(lengthOfCall / 60);
GoogleCalendar.quickAddEvent.setQuickAdd(
  "Call from " + AndroidPhone.receiveAPhoneCall.ContactName + " at " + AndroidPhone.receiveAPhoneCall.FromNumber + " for " + lengthOfCall.toString() + " minutes"
);
