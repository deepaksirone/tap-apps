var timeOfDay = Meta.triggerTime.minute()
if (timeOfDay >= 0905 || timeOfDay <= 0855)
Qapital.saveTowardGoal.skip()
