var alarmArray = AmazonAlexa.alarmFired.AlertTime.split(" at ");
var alarmTime  = alarmArray[1];
var alarmMessage = "Your Amazon Alexa alarm went off at " + alarmTime + ". I repeat. Your Amazon Alexa alarm. Went off at. " + alarmTime + ". ";
VoipCalls.callMyDevice.setMessage(alarmMessage);
