var Seoul    = MomentJS.tz('Asia/Seoul')
var mint = Seoul.minute()
var hour = Seoul.hour()

  if (mint < 20)
 {
   if (hour >1 && hour <7)
   { 
     Line.sendMessage.skip()
   }
  else Line.sendMessage.setMessage(Twitter.newTweetByUser.Text)
 }

 else Line.sendMessage.skip()
