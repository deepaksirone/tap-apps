if (Evernote.newNoteInNotebook.Tags.localeCompare("Journal") == 0) {
  Evernote.appendToNote.setTitle(Meta.currentUserTime.format("YYYYMMDD"))
  Evernote.appendToNote.setTags("IFTTT")
}