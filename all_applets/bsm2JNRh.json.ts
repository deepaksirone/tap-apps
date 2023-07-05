var hour     = Meta.currentUserTime.hour()

if (hour > 18) {
  Arlo.record.skip("Too Late")
}

if (hour < 5) {
  Arlo.record.skip("Too Early")
}