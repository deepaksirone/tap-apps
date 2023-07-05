var randomNumber = Math.random();
var hold = 0

if (randomNumber > .50){
if (hold == 0){
  hold = hold + 1
}
else{
  Reddit.submitLinkReddit.skip("Hold is bigger than 0")
}
}
else{
  Reddit.submitLinkReddit.skip("Random number not bigger than .85")
}