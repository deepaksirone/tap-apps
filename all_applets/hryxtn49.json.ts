var url=Youtube.newPublicVideoFromSubscriptions.Url
var ID = "";
  var url1 = url.replace(/(>|<)/gi,'')
  var url2 = url1.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url2[2] !== null) {
    var s: string = url2[2];
    var ID1: Array<string> = s.split(/[^0-9a-z_\-]/i);
    ID = ID1[0];
  }
  else {
    ID = url;
  }
  Todoist.createTask.setTaskContent("pt2://video/"+ID+" ("+Youtube.newPublicVideoFromSubscriptions.Title+")");
