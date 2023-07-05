var message = "New #Pocket item:<br>";

if(Pocket.newItemAddedPocket.Title != ""){
  message += ("<b>" + Pocket.newItemAddedPocket.Title + "</b><br><br>");
}

if(Pocket.newItemAddedPocket.Url != ""){
  message += (Pocket.newItemAddedPocket.Url + "<br><br>");
}

if(Pocket.newItemAddedPocket.Excerpt != ""){
  message += (Pocket.newItemAddedPocket.Excerpt + "<br><br>");
}

if(Pocket.newItemAddedPocket.Tags != ""){
  message += ("Tags: " + Pocket.newItemAddedPocket.Tags + "<br>");
}

if(Pocket.newItemAddedPocket.AddedAt != ""){
  message += ("on " + Pocket.newItemAddedPocket.AddedAt);
}

Telegram.sendMessage.setText(message);