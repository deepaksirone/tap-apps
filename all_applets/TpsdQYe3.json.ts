var event = 'On'
var sname = WemoInsightSwitch.attributeINSIGHTONN.SwitchName
var eventAt = WemoInsightSwitch.attributeINSIGHTONN.SwitchedOnAt
var codeRanTime = Meta.currentUserTime.format('MMMM DD YYYY hh:mm:ss a')
var triggerTime = Meta.triggerTime.format('MMMM DD YYYY hh:mm:ss a')
GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(sname + '|||' + event + '|||' + eventAt + '|||=DATEVALUE(SUBSTITUTE("' + eventAt + '"," at "," "))+TIMEVALUE(SUBSTITUTE("' + eventAt + '"," at "," "))|||' + codeRanTime + '|||=DATEVALUE("' + codeRanTime + '")+TIMEVALUE("' + codeRanTime + '")|||' + triggerTime + '|||=DATEVALUE("' + triggerTime + '")+TIMEVALUE("' + triggerTime + '")')