var minuteNow = Meta.currentUserTime.minute()
var secondNow = Meta.currentUserTime.second()
var maxCount = 0
var randomNumber = Math.random();

if (20 >= minuteNow) {
  if (maxCount == 0){
  maxCount = maxCount + 1
  }
}else{
  Reddit.submitLinkReddit.skip("Smaller than 30")
}

if ((minuteNow % 3) > 0){
Reddit.submitLinkReddit.skip("Modulus Error")
}

if (randomNumber > .50){

}
else{
  Reddit.submitLinkReddit.skip("Random number not bigger than .85")
}