var hour     = Meta.currentUserTime.hour()

if (hour > 18) {
  Email.sendMeEmail.skip("Too Late")
}

if (hour < 5) {
  Email.sendMeEmail.skip("Too Early")
}