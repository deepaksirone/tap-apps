var Texto = Feed.newFeedItem.EntryTitle;
var rss = " ";
rss= rss.concat(Texto);
var num = 6.0;
var snum = num.toString();
while(num >= 1 && num <= 10 ){
  if(snum=="1"||snum=="2"||snum=="3"||snum=="4"||snum=="5"||snum=="6"||snum=="7"||snum=="8"||snum=="9"||snum=="10"){
    snum=snum.concat(".0");
  }
  if(rss.indexOf(snum) >=0 ){
    //num = num + 0.1 ; //old and bad code >:(
    //num = parseFloat((num + 0.1).toFixed(1));
    //console.log("sismo grado:", num); // comentar al terminar
    break;
  }else{
    if(num >=9.9){
      FacebookMessenger.sendMessage.skip()
      //console.log("Skiped"); //comentar al terminar
      break;
    }
    //num = (num + 0.1);
    num = parseFloat((num + 0.1).toFixed(1));
    snum = num.toString();
  }
}