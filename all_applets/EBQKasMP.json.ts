var hour = Meta.currentUserTime.hour() 

if (hour >= 6 && hour < 21) { Woopla.ttsCall.skip("No calls during daytime.") }
