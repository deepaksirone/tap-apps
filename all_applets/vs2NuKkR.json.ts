var hour = Meta.currentUserTime.hour()

if (hour < 22 && hour > 6) {
  PhoneCall.callMyPhone.skip("Not during sleeping hours")
}

else{

}