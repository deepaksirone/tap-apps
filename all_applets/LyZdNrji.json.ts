var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 11 || timeOfDay < 15) {
  Gmail.sendAnEmail.setBody("Hey baby, I'm leaving for lunch!");
  Gmail.sendAnEmail.setSubject("");
} else {
  Gmail.sendAnEmail.setBody("Hey baby, I'm leaving work now!");
  Gmail.sendAnEmail.setSubject("");
}