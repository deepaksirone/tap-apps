var event = 'Standby'
var sname = WemoInsightSwitch.attributeINSIGHTSTANDBYN.SwitchName
var eventAt = WemoInsightSwitch.attributeINSIGHTSTANDBYN.SwitchedToStandbyAt
var codeRanTime = Meta.currentUserTime.format('MMMM DD YYYY hh:mm:ss a')
var triggerTime = Meta.triggerTime.format('MMMM DD YYYY hh:mm:ss a')
GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(sname + '|||' + event + '|||' + eventAt + '|||=DATEVALUE(SUBSTITUTE("' + eventAt + '"," at "," "))+TIMEVALUE(SUBSTITUTE("' + eventAt + '"," at "," "))|||' + codeRanTime + '|||=DATEVALUE("' + codeRanTime + '")+TIMEVALUE("' + codeRanTime + '")|||' + triggerTime + '|||=DATEVALUE("' + triggerTime + '")+TIMEVALUE("' + triggerTime + '")')