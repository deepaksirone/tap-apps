var hour     = Meta.currentUserTime.hour()

if (hour > 18) {
  Gmail.sendAnEmail.skip("Too Late")
}

if (hour < 5) {
  Gmail.sendAnEmail.skip("Too Early")
}