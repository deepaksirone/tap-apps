if(Rememberthemilk.taskCompleted.Tags.indexOf("trackthis") === -1) {
  GoogleCalendar.quickAddEvent.skip();
} else {
  let timestamp = moment(Meta.triggerTime)
                  .format('MMMM Do YYYY, h:mma');
  let list = Rememberthemilk.taskCompleted.List;
  let taskName = Rememberthemilk.taskCompleted.Name;
  let taskLink = Rememberthemilk.taskCompleted.LinkToTask;
  let taskText = `${list} // ${taskName} ${taskLink} ${timestamp}`;
  GoogleCalendar.quickAddEvent.setQuickAdd(taskText);
}
