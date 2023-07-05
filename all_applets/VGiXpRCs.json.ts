var hh = Meta.currentUserTime.hour()

if ( hh <= 19 && hh >= 7 ){
  Lifx.turnOn.skip("Too early");
}