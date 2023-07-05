var minLength = 16; // min description length
var titleExcludeList = ["HOLD", "BUSY", "WORK", "BLOCK", "DO NOT", "TEMPORARY", "HOLIDAY", "WFH", "OOO", "SICK", "SICK", "NEW YEAR", "MARTIN LUTHER", "MEMORIAL", "INDEPENDENCE", "LABOR DAY", "VETERANS", "THANKSGIVING", "CHRISTMAS"]; // titles containing any of these words are excluded (use uppercase strings only)

var noAgenda = false;
if (!GoogleCalendar.newEventAdded.Description.trim || (GoogleCalendar.newEventAdded.Description.replace(/[^a-zA-Z]/g, '').length < minLength)) {
  noAgenda = true;
}

var titleTestStr = GoogleCalendar.newEventAdded.Title.toUpperCase();
titleExcludeList.forEach(function(word) {
  if(titleTestStr.indexOf(word) !== -1) {
    noAgenda = false;
  }
})

if (!noAgenda) {
  Slack.postToChannel.skip();
}