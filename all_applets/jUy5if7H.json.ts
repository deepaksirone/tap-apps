var Day = Meta.currentUserTime.day()
var Hour = Meta.currentUserTime.hour()
let optionOne = Math.floor((Math.random() * Trakt.recommendedMovies.len))
let optionTwo = Math.floor((Math.random() * Trakt.recommendedMovies.len))
let optionThree = Math.floor((Math.random() * Trakt.recommendedMovies.len))
if (Day != 6) {
  IfNotifications.sendRichNotification.skip()
} else if (Hour < 17) {
  IfNotifications.sendRichNotification.skip()
} else if (Hour >= 17) {
IfNotifications.sendRichNotification.setMessage(`Ready for movie night? here are three movies to pick from: ${Trakt.recommendedMovies.MovieTitle}, ${Trakt.recommendedMovies.MovieTitle}, or ${Trakt.recommendedMovies.MovieTitle}`)
}
