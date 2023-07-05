var message = "#Pocket item tagged:<br>";

if(Pocket.newTaggedItemPocket.Title != ""){
  message += ("<b>" + Pocket.newTaggedItemPocket.Title + "</b><br><br>");
}

if(Pocket.newTaggedItemPocket.Url != ""){
  message += (Pocket.newTaggedItemPocket.Url + "<br><br>");
}

if(Pocket.newTaggedItemPocket.Excerpt != ""){
  message += (Pocket.newTaggedItemPocket.Excerpt + "<br><br>");
}

if(Pocket.newTaggedItemPocket.Tags != ""){
  message += ("Tags: " + Pocket.newTaggedItemPocket.Tags + "<br>");
}

if(Pocket.newTaggedItemPocket.AddedAt != ""){
  message += ("on " + Pocket.newTaggedItemPocket.AddedAt);
}

Telegram.sendMessage.setText(message);