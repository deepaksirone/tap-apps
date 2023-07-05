Slack.postToChannel.setTitle(":inbox_tray: Tasks for today")

let message = "";
let today = Meta.currentUserTime;

GoogleTasks.listAllTasks.forEach(task => {
  let task_due = moment(task.Due);
  if (today.isSame(task_due, 'day')) {
    message = message + `:black_square_button: *${task.Title}*\n_Notes:_ ${task.Notes}\n\n`;
  }
})

if (GoogleTasks.listAllTasks.length === 0) {
    Slack.postToChannel.skip();
}

if (message.length === 0) {
  message = "No tasks are due today :party:"
}

Slack.postToChannel.setMessage(message);
