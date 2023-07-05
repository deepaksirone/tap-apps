var orig = DoNote.doNoteNewCommandCommon.OccurredAt
var time = orig.substr(-7)
var date = orig.substr(0, orig.length-7)
var hours = parseInt(time.substr(0, 2));

if(time.indexOf('AM') != -1 && hours == 12) {
  // OccuredAt adds a 0 before the hour if single-digit
  time = time.replace('12', '0');
}

if(time.indexOf('PM') != -1 && hours  < 10) {
  // OccuredAt adds a 0 before the hour if single-digit
  time = time.replace('0' + hours.toString(), (hours + 12).toString())
} else {
  time = time.replace(time.toString(), (hours + 12).toString())
}

time = time.replace(/AM|PM/, '')
Evernote.createNote.setTitle(`${date + time}`)
