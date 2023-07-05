var text = AndroidMessages.receivedAMessage.Text.replace(/잔액.*/g, "");
Slack.postToChannel.setMessage(text);
