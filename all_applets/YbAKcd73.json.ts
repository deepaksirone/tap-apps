var title = GoogleSheets.newRowInSpreadsheet.ColumnA;

if(title == null) Github.createNewIssueForRepository.skip();

Github.createNewIssueForRepository.setIssueTitle(title);

var desc = GoogleSheets.newRowInSpreadsheet.ColumnB;
var assignee = GoogleSheets.newRowInSpreadsheet.ColumnC;

var body = desc + "<br />" + "Assigned to : " + assignee;

Github.createNewIssueForRepository.setIssueBody(body);
