var reminderTime = Meta.triggerTime.add(2, 'h');
IosReminders.createReminderIosReminders.setAlarmDate(reminderTime.format("M/DD/YYYY") + " at " + reminderTime.format("h:mm A"))