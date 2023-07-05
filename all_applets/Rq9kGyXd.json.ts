var SearchResult = Office365Mail.newEmailFrom.Subject.search("Build");

if(SearchResult == -1) {
  Slack.postToChannel.skip();
}