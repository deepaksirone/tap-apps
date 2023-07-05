var texto = Twitter.newTweetByUser.Text.toLowerCase();

// Se o texto não tiver as palavras "inscrição" e "música boa ao vivo"
if (texto.indexOf("inscrição") === -1 || texto.indexOf("música boa ao vivo") === -1)
{
  // Não envia notificação
  IfNotifications.sendNotification.skip("Tuíte não foi sobre inscrição para o Música Boa Ao Vivo");

  // Não envia email
  Email.sendMeEmail.skip("Tuíte não foi sobre inscrição para o Música Boa Ao Vivo");
}