var title = Feed.newFeedItemMatches.EntryTitle;

// Use book title as main task content
var posTitle1 = title.indexOf("'") + 1;
var posTitle2 = title.lastIndexOf("'");
var newTitle = title.slice(posTitle1, posTitle2);

// Add link to Amazon in note
var note = Feed.newFeedItemMatches.EntryContent;
var posNote1 = note.indexOf("a href=\"/book/show/") + 19;
var posNote2 = posNote1 + 8;
var urlAmazon = "https://www.goodreads.com/buy_buttons/12/follow?book_id=";
var newNote = urlAmazon + note.slice(posNote1, posNote2);

Todoist.createTask.setTaskContent(newTitle);
Todoist.createTask.setNote(newNote);