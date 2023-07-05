const html = Email.sendIftttAnEmail.BodyHTML;

// Only handle new chapter notifications.
if (!html.match(/A new chapter has been added/)) {
  Pocket.readItLater.skip();
}

// Look for the chapter link.
const match = html.match(/www\.fimfiction\.net\/story\/(\d+\/\d+)/);
if (match) {
  // Proxy it to work around the og:metatag bug.
  Pocket.readItLater.setUrl(
    'https://ermarian.net/services/fimfiction/proxy/' + match[1]
  );
}
else {
  Pocket.readItLater.skip();
}