var tt = Meta.triggerTime;
var now = moment();
var tomorrow = now.add(1,"days");

if (!tt.isBetween(now.hour(18), tomorrow.hour(5))) {
  Kasa.turnOn.skip();
}
