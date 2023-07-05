var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay < 7 || timeOfDay > 21) {
  AndroidDevice.setDeviceVolume.skip("After hours")
}
