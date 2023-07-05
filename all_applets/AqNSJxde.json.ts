var hour     = Meta.triggerTime.hour()

if (hour < 22) {
  Smartthings.turnOnSmartthings.skip()
}