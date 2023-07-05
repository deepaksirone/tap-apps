if (Meta.currentUserTime.locale('en').isoWeekday() < 6)
{
  Yeelight.setScene.skip('Not Weekends');
}