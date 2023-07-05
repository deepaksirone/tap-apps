if (Meta.triggerTime.get('hour') < 17) {
  Telegram.sendMessage.skip()
}