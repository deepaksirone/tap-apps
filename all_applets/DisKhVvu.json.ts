var link_raw = Twitch.newVideoByChannelYouFollow.VideoUrl,

    link_text = Twitch.newVideoByChannelYouFollow.VideoUrl
      .replace('https://www.', ''), // to prevent link consumption by either ifttt or todoist - they like to replace the link with "Twitch" instead for some reason.

    title_text = Twitch.newVideoByChannelYouFollow.VideoTitle
      .replace('*','\*') // https://support.todoist.com/hc/articles/205195102
      .replace('[','\[') 
      .replace(']','\]')
      .replace("'","\'")
      .replace('"','\"')
      .replace('(','\(')
      .replace(')','\)');

Todoist.createTask.setTaskContent(
'*Highlight* [' + link_text + '](' + link_raw + ') | **' + title_text + '**'
)