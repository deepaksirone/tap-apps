  var hour     = Meta.currentUserTime.hour()
var colorKey = hour.toString()



if (hour < 17) {
  Ewelink.plugs3Action.skip("Too early")
}
