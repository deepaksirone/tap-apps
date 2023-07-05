var timeOfDay=Meta.currentUserTime.hour()
if (timeOfDay>=7||timeOfDay<18){
  //will Continue as Normal
  }else{
    //Skip setting scene 
    Ewelink.switchAction.skip()
    }