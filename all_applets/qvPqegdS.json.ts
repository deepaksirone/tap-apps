var timeOfDay = Meta.currentUserTime.hour() 
if (timeOfDay >= 7 && timeOfDay < 22 ) 
SomfyProtect.soundSiren.skip()
else (timeOfDay < 7 && timeOfDay > 22 )

