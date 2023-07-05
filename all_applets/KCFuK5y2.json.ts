var hour     = Meta.currentUserTime.hour()
if (hour < 17)
{
  WemoSwitch.attributeSocketOnDiscrete.skip("not in hour timing")
}