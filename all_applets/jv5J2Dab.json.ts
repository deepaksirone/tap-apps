let filename = Pocket.newTaggedItemPocket.Url
if (filename.indexOf("?") != -1) {
  filename = filename.substr(0, filename.indexOf("?"))
}
filename = filename.substr(filename.lastIndexOf("/")+1)

Datadotworld.uploadFile.setFileName(filename)
