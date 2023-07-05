const regex = RegExp(/\$\d+/)
const dollarAmounts = Trigger.Title.match(/\$\d+/)
const createdAt = Trigger.CreatedAt
const desc = Trigger.Description
const titleWithoutDollarAmount = Trigger.Title.replace(regex, '')

if (dollarAmounts == null) {
  GoogleSheets.appendToGoogleSpreadsheet.skip()
} else {
  GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(
    createdAt +  "|||" + dollarAmounts[0] + "|||" + titleWithoutDollarAmount + "|||" + desc
  )
}
