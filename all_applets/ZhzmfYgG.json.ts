var event = 'Off'
var sname = WemoInsightSwitch.attributeINSIGHTOFFN.SwitchName
var eventAt = WemoInsightSwitch.attributeINSIGHTOFFN.SwitchedOffAt
var codeRanTime = Meta.currentUserTime.format('MMMM DD YYYY hh:mm:ss a')
var triggerTime = Meta.triggerTime.format('MMMM DD YYYY hh:mm:ss a')
GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(sname + '|||' + event + '|||' + eventAt + '|||=DATEVALUE(SUBSTITUTE("' + eventAt + '"," at "," "))+TIMEVALUE(SUBSTITUTE("' + eventAt + '"," at "," "))|||' + codeRanTime + '|||=DATEVALUE("' + codeRanTime + '")+TIMEVALUE("' + codeRanTime + '")|||' + triggerTime + '|||=DATEVALUE("' + triggerTime + '")+TIMEVALUE("' + triggerTime + '")')