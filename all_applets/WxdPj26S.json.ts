var hour = Meta.currentUserTime.hour()

if (hour > 20 || hour < 4 ) {

} else {
  WemoInsightSwitch.attributeInsightOnDiscrete.skip("Too early")
 
}