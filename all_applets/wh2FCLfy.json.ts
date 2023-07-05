var btDeviceName = AndroidDevice.bluetoothConnected.DeviceName;

if (btDeviceName != "Ford Audio") {
  AndroidDevice.playBestSong.skip("Not Ford Audio device")
}