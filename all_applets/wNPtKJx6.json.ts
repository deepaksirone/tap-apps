// If Weather.currentConditionIs.Condition includes 'snow' and the current month is not July, then Dominos.launchEasyOrder.skip()
if ( (Weather.currentConditionIs.Condition.indexOf('snow') > -1) && (Meta.currentUserTime.month() !== 6) ) {
  Dominos.launchEasyOrder.skip()
}