if (Trigger.Filename.match(/~\$/i)) {
Slack.postToChannel.skip('Temp File Was Skipped')
}