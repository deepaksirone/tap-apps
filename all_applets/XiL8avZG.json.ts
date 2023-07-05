var timeOfDay= Meta.currentUserTime.hour()
if ( timeOfDay >= 15 || timeOfDay < 21 ) {
  // will continue as normal
  } else {
    //skip sending 
    Gmail.sendAnEmail.skip()
    }