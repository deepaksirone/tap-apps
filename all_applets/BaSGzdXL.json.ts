var timeOfDay = Meta.currentUserTime.hour()

if ( timeOfDay < 20 ) {
  // Skip if not rigth time
  Kasa.turnOn.skip("noo") 
}