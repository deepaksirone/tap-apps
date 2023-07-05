var htmlContent = Notebook.newTextNotecardInNotebook.NotecardHtmlContent;
var text = htmlContent.replace(/<\/?[^>]+>/gi, " ");
Twitter.postNewTweet.setTweet(text);