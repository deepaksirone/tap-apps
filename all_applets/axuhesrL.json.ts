var hour     = Meta.triggerTime.hour()

if (hour > 16)  {
  Gmail.sendAnEmail.setSubject("User has left the area")
} 
else {
  Gmail.sendAnEmail.skip("Too early in the day")
}