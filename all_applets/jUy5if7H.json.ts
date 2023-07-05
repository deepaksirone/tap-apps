var Day = Meta.currentUserTime.day()
var Hour = Meta.currentUserTime.hour()
let optionOne = Math.floor((Math.random() * Trakt.recommendedMovies.length))
let optionTwo = Math.floor((Math.random() * Trakt.recommendedMovies.length))
let optionThree = Math.floor((Math.random() * Trakt.recommendedMovies.length))
if (Day != 6) {
  IfNotifications.sendRichNotification.skip()
} else if (Hour < 17) {
  IfNotifications.sendRichNotification.skip()
} else if (Hour >= 17) {
IfNotifications.sendRichNotification.setMessage(`Ready for movie night? here are three movies to pick from: ${Trakt.recommendedMovies[optionOne].MovieTitle}, ${Trakt.recommendedMovies[optionTwo].MovieTitle}, or ${Trakt.recommendedMovies[optionThree].MovieTitle}`)
}