// Extracting the birthday boy/girl name
var regExp = RegExp('Aniversário\\s') // matches Aniversário and the following whitespace
var bdayName = GoogleCalendar.eventFromSearchStarts.Title.split(regExp)[1] // extracting everything that is not Aniversário

// Writing three random birthday wishes messages
var bdayMsgs: Array<string> = ["É muito bom contar com a sua presença entre nós 😊😚, e não há nada que aconteça que possa ser completo sem a sua companhia. E hoje toda a natureza harmoniosa e divina rege uma sinfonia maravilhosa e nos convida a todos para festejar o seu aniversário. Parabéns 🎁🎉, você merece tudo de bom.😘","A lágrima dura uma noite; as alegrias chegam com o Sol da manhã. Parabéns por esse seu aniversário. Com carinho. Feliz Aniversário. Felicidades!","Obrigado por ser uma pessoa com quem posso sempre conversar☺️😚, meditar, refletir e compartilhar minha vida, Felicidades! 👏😘"]

// Generating a random index between 0 and 2
var rndIdx = Math.floor(Math.random() * 2)  

// Setting the card title, description, position and attachment
Trello.createCard.setTitle('Feliz aniversário, ' + bdayName + '!')
Trello.createCard.setDescription(bdayMsgs[rndIdx])
Trello.createCard.setPos("top")
Trello.createCard.setUrl(GoogleCalendar.eventFromSearchStarts.Description)

// Finitto!
