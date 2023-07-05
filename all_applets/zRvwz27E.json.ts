var hour = Meta.currentUserTime.hour();
if(hour>8&&hour<21){
VoipCalls.callMyDevice.skip(hour.toString());}else{VoipCalls.callMyDevice.setMessage("motion detected!");}
