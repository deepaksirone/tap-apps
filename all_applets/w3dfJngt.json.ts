var msg = AndroidMessages.receivedAMessageFromNumber.Text.toLowerCase();

var good_zips: Array<string> = ['90024', '90034', '90035', '90036', '90067', '90211', '90212'];
var good_words: Array<string> = ['patient', 'pt', 'accept', 'help'];
var cancel_words: Array<string> = ['cancel', 'disregard', 'sorry'];

var auto_accept = false;

for (var i = 0; i < good_zips.length; i++){
  if (msg.indexOf(good_zips[i]) != -1) {
    for (var k = 0; k < good_words.length; k++){
      if (msg.indexOf(good_words[k]) != -1){
        auto_accept = true;
      }
    }
  }
}

for (var j = 0; auto_accept && j < cancel_words.length; j++){
  if (msg.indexOf(cancel_words[j]) != -1){
    auto_accept = false;
  }
}

if(auto_accept){
  AndroidMessages.sendAMessage.setText('yes');
} else {
  AndroidMessages.sendAMessage.skip();
}
