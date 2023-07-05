// TODO: Allow user to specify filename format when IFTTT
// supports custom field data ("queries")
GoogleDocs.appendToGoogleDoc.setFilename(
  Meta.triggerTime.format('YYYY-MM-DD')
);

var monthNames: Array<string> = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var body = DoNote.doNoteNewCommandCommon.NoteText
  .replace(/\n/g, '</p><p>');

GoogleDocs.appendToGoogleDoc.setBody(
  '<br><p><b>' + DoNote.doNoteNewCommandCommon.OccurredAt + '</b></p>'
  + '<p>' + body + '</p><hr>'
);
