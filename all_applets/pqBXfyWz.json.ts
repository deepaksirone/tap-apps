var confirmation_subject = "URGENTE: Necessário confirmação para"
if (Office365Mail.newEmailFrom.Subject.substring(0, confirmation_subject.length) == confirmation_subject){
  var room = Office365Mail.newEmailFrom.Subject.substring(confirmation_subject.length + 1,Office365Mail.newEmailFrom.Subject.length)
  CiscoSpark.postAMessage.setText("A sala " + room +" está reservada para a sua reunião! Efetue o check-in dentro de 5 minutos para manter a sua reserva.")
}else if(Office365Mail.newEmailFrom.Subject == "Reunião Terminada"){
  CiscoSpark.postAMessage.setText("A sala reservada para a sua reunião foi cancelada por falta de check-in.")
}else{
  CiscoSpark.postAMessage.skip() 
}