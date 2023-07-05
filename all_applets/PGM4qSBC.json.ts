var Texto = Twitter.newTweetByUser.Text;
var num = 6.0;
while(num >= 1 && num <= 10 ){
  if(Texto.indexOf(("Magnitud "+ num.toString()) ) >=0 ){
    num = parseFloat((num + 0.1).toFixed(1));
    break;
    }else{
      if(num >=9){
        IfNotifications.sendNotification.skip();
        break;
      }
      num = parseFloat((num + 0.1).toFixed(1));
    }
  }
