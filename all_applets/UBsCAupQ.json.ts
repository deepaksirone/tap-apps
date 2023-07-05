var store = Trigger.AddedItem
var title = Trigger.AddedItem
title = title.replace(/costco|kroger|publix|walmart|aldi|target|shopping|list|from|at|in/gi,'')

IosReminders.createReminderIosReminders.setTitle(title)

if (store.match(/costco/gi)){
  IosReminders.createReminderIosReminders.setList('Costco Shopping List')
} else if (store.match(/kroger/gi)){
  IosReminders.createReminderIosReminders.setList('Kroger Shopping List')
} else if (store.match(/publix/gi)){
  IosReminders.createReminderIosReminders.setList('Publix Shopping List')
} else if (store.match(/walmart/gi)){
  IosReminders.createReminderIosReminders.setList('Walmart Shopping List')
} else if (store.match(/aldi/gi)){
  IosReminders.createReminderIosReminders.setList('Aldi Shopping List')
} else if (store.match(/target/gi)){
  IosReminders.createReminderIosReminders.setList('Target Shopping List')
}