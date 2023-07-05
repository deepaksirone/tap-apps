//var timeOfDay = Meta.triggerTime.weekday()
var str_text = Trigger.Text
var coincidencia = str_text.match('RT @')
var simbolo: Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var index_simbolo = Math.floor(Math.random() * simbolo.length)
var index_simbolo2 = Math.floor(Math.random() * simbolo.length)
var str_simbolo = simbolo[index_simbolo]
var str_simbolo2 = simbolo[index_simbolo2]
var str_alea = Math.floor((Math.random() * 10) + 0).toString()
var hashtag: Array<string> = ["#Resistencia", "#Venezuela", "#ResistenciaVzla", "#Caracas", "#LoMásVisto", "#LoMásLeído", "#SOSVenezuela", "#ÚltimaHora", "#URGENTE", "#AutoDefensas", "#LaOfensiva", "#Defiendete", "#Partisano", "#LegítimaDefensa", "#Contraataque", "#EstadoDeNecesidad", "#LaInminencia", "#DefensaPropia", "#DerechoDeRebelión", "#DerechoDeRevolución", "#DerechoDeResistencia", "#Disidencia", "#Insurgencia", "#Rebeldía"]
//var hashtag = ["#LoMásVisto", "#ÚltimaHora", "#URGENTE", "#Noticias", "#NoTeLoPierdas"]
var index = Math.floor((Math.random() * hashtag.length))
var str_diferente = " " + str_simbolo2 + str_simbolo + " " + hashtag[index]
if (coincidencia != null) {
    var res = str_text.replace(/RT @\w+: /g, "");
    var res2 = res.replace(/@/g, "")
    if (coincidencia.toString() == 'RT @' && res2.length <= 122) {
      Twitter.postNewTweet.setTweet(res2 + str_diferente)
    } 
    else if (coincidencia.toString() == 'RT @' && res2.length > 122 && res2.length <= 140) {
      Twitter.postNewTweet.setTweet(res2)
    }
    else if (res2.length > 140) {
      Twitter.postNewTweet.skip()
    }
} else {
    var res3 = str_text.replace(/@/g, "")
    if (res3.length <= 122) {
      Twitter.postNewTweet.setTweet(res3 + str_diferente)
    } 
    else if (res3.length > 122 && res3.length <= 140) {
      Twitter.postNewTweet.setTweet(res3)
    } 
    else if (res3.length > 140) {
      Twitter.postNewTweet.skip()
    }
}
