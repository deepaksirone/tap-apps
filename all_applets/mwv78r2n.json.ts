var values = DoNote.doNoteNewCommandCommon.NoteText.split(",", 2)
if (values.length > 1) {
  IosHealth.logCaloriesConsumed.setFoodDescription(values[0])
  IosHealth.logCaloriesConsumed.setNumberOfCalories(values[1])
} else if (values.length > 0) {
  IosHealth.logCaloriesConsumed.setNumberOfCalories(values[0])
} else {
  IosHealth.logCaloriesConsumed.skip("No data provided")
}