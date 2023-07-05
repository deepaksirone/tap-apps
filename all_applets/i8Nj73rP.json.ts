//if Meta.currentUserTime is before 9pm, then Dominos.launchEasyOrder.skip()
if (Meta.currentUserTime.hour() < 21) {
  Dominos.launchEasyOrder.skip()
}