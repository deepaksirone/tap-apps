var timeOfDay = Meta.triggerTime.weekday()
var array_nombre_dias: Array<string> = ["#FelizDomingo", "#FelizLunes", "#FelizMartes", "#FelizMiércoles", "#FelizJueves", "FelizViernes", "#FelizSábado"]
var felizDia = array_nombre_dias[timeOfDay]
var diaDelMes = Meta.triggerTime.date()
var str_diaDelMes = diaDelMes.toString()
var numMes = Meta.triggerTime.month()
var nombreMes: Array<string> = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
var str_nombreMes = nombreMes[numMes]
var str_hashtag_nombreMes = "#" + str_diaDelMes + str_nombreMes
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
var str_text = Trigger.Text
var coincidencia = str_text.match('RT @')
var simbolo: Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var index_simbolo = Math.floor(Math.random() * simbolo.length)
var index_simbolo2 = Math.floor(Math.random() * simbolo.length)
var str_simbolo = simbolo[index_simbolo]
var str_simbolo2 = simbolo[index_simbolo2]
var str_alea = Math.floor((Math.random() * 10) + 0).toString()
//var hashtag = [str_hashtag_nombreMes, "#LoMásVisto", "#LoMásLeído", "#ÚltimaHora", "#URGENTE", "#Noticias", "#NoTeLoPierdas", "#AHORA", "#Resistencia", "#Venezuela", "#ResistenciaVzla", "#SOSVenezuela", "#Caracas", "#VenezuelaLibre"]
var hashtag: Array<string> = [felizDia, str_hashtag_nombreMes, "#LoMásVisto", "#ÚltimaHora", "#URGENTE", "#Noticias", "#NoTeLoPierdas", "#AHORA", "#Resistencia", "#Venezuela", "#ResistenciaVzla", "#SOSVenezuela", "#Caracas", "#VenezuelaLibre", "#Política"]
//var hashtag = ["#FelizDomingo"]
var index = Math.floor((Math.random() * hashtag.length))
var str_diferente = " " + str_simbolo2 + str_simbolo + " " + hashtag[index]
if (coincidencia != null) {
    var res = str_text.replace(/RT @\w+: /g, "")
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
