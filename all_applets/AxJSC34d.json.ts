const watchedMovies = Trakt.mostWatchedMovies.slice(0,9)
let tweet = "My top 10 most watched movies: <br/>"

watchedMovies.forEach((movie, index) => {
  tweet += `${index+1}) ${movie.MovieTitle} (${movie.MovieYear})<br/>`
})

Twitter.postNewTweet.setTweet(tweet)
