var values = DoNote.doNoteNewCommandCommon.NoteText.split(" ", 2)
if (values.length > 1) {
  IosHealth.logSleep.setAsleepAt(values[0])
  IosHealth.logSleep.setDateSleepEnded(values[1])
} else {
  IosHealth.logSleep.skip("Enter time feel asleep and time awoke, separated by a space")
}