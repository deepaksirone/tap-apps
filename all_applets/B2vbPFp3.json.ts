IfNotifications.sendRichNotification.setLinkUrl(`https://twitter.com/search?q=${encodeURIComponent(Trakt.watchedEpisode.ShowTitle)}%20${encodeURIComponent(Trakt.watchedEpisode.EpisodeTitle)}`)
IfNotifications.sendRichNotification.setTitle(`Keep up with the latest discussions about ${Trakt.watchedEpisode.ShowTitle}`)
IfNotifications.sendRichNotification.setMessage(`You just watched ${Trakt.watchedEpisode.ShowTitle} - ${Trakt.watchedEpisode.EpisodeTitle} S${Trakt.watchedEpisode.EpisodeSeason} E${Trakt.watchedEpisode.EpisodeNumber} press this notification to check out discussion about the episode on Twitter!`)