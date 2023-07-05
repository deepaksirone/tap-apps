var robot = Irobot.getCurrentStatus.CurrentStatus;

if (robot == 'running') {
  Irobot.resumeRobot.skip()
} else if (robot == 'stopped') {
  Irobot.resumeRobot.skip()
} else if (robot == 'stuck') {
  Irobot.resumeRobot.skip()
} else if (robot == 'docking') {
  Irobot.resumeRobot.skip()
} else if (robot == 'mid_mission_charging') {
 Irobot.resumeRobot.skip() 
} else if (robot == 'charging') {
 Irobot.resumeRobot.skip()
}
