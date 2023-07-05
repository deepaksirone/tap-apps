///////////Translate Color IFTTT Filter///////////
//////////////////////////////////////////////////
//////////////////Bruno Leonardi//////////////////

//ingrediente ricevuto
var TextField = GoogleAssistant.voiceTriggerWithOneTextIngredient.TextField;

//colore impostare
var Color = TextField;

//tonalità luce naturale
if (TextField.search(/bianc/i) != -1) {Color = "White";}
if (TextField.search(/luminos/i) != -1) {Color = "White";}
if (TextField.search(/neutr/i) != -1) {Color = "WhiteSmoke";}
if (TextField.search(/natural/i) != -1) {Color = "WhiteSmoke";}
if (TextField.search(/chiar/i) != -1) {Color = "AliceBlue";}
//if (TextField.search(/caldo/i) != -1) {Color = "AliceBlue"; SETCOLOR;}
if (TextField.search(/freddo/i) != -1) {Color = "Azure";}

//tonalità di rosso
if (TextField.search(/ross/i) != -1) {Color = "Red";}
if (TextField.search(/rosso chiar/i) != -1) {Color = "OrangeRed";}
if (TextField.search(/rosso scur/i) != -1) {Color = "DarkRed";}
if (TextField.search(/fuoco/i) != -1) {Color = "Red";}

//tonalità di arancio
if (TextField.search(/aranc/i) != -1) {Color = "Orange";}
//if (TextField.search(/arancio chiar/i) != -1) {Color = "DarkOrange"; SETCOLOR;}
if (TextField.search(/arancio scur/i) != -1) {Color = "DarkOrange";}

//tonalità di giallo
if (TextField.search(/gial/i) != -1) {Color = "Yellow";}
//if (TextField.search(/giallo chiar/i) != -1) {Color = "Yellow"; SETCOLOR;}
//if (TextField.search(/giallo scur/i) != -1) {Color = "Yellow"; SETCOLOR;}

if (TextField.search(/giallo limon/i) != -1) {Color = "Lime";}
if (TextField.search(/limon/i) != -1) {Color = "Lime";}
if (TextField.search(/oro/i) != -1) {Color = "Gold";}

//tonalità di verde
if (TextField.search(/verd/i) != -1) {Color = "Green";}
if (TextField.search(/verde chiar/i) != -1) {Color = "GreenYellow";}
if (TextField.search(/verde scur/i) != -1) {Color = "LawnGreen";}
if (TextField.search(/verdin/i) != -1) {Color = "YellowGreen";}
if (TextField.search(/verdas/i) != -1) {Color = "LawnGreen";}
if (TextField.search(/verde limone/i) != -1) {Color = "YellowGreen";}

//tonalità di blu
if (TextField.search(/blu/i) != -1) {Color = "Blue";}
if (TextField.search(/blue/i) != -1) {Color = "Blue";}
if (TextField.search(/blu chiar/i) != -1) {Color = "MediumBlue";}
if (TextField.search(/blue chiar/i) != -1) {Color = "MediumBlue";}
if (TextField.search(/blu scur/i) != -1) {Color = "DarkBlue";}
if (TextField.search(/blue scur/i) != -1) {Color = "DarkBlue";}
if (TextField.search(/blu notte/i) != -1) {Color = "DarkBlue";}
if (TextField.search(/blue notte/i) != -1) {Color = "DarkBlue";}
if (TextField.search(/puff/i) != -1) {Color = "MediumBlue";}

//tonalità di azzurro
if (TextField.search(/mare/i) != -1) {Color = "RoyalBlue";}
if (TextField.search(/celest/i) != -1) {Color = "DeepSkyBlue";}
if (TextField.search(/azzur/i) != -1) {Color = "LightBlue";}
if (TextField.search(/acqu/i) != -1) {Color = "Aqua";}
if (TextField.search(/turch/i) != -1) {Color = "Turquoise";}

//tonalità di viola
if (TextField.search(/fucs/i) != -1) {Color = "Fuchsia";}
if (TextField.search(/rosa/i) != -1) {Color = "Pink";}
if (TextField.search(/rose/i) != -1) {Color = "Pink";}
if (TextField.search(/viol/i) != -1) {Color = "Violet";}
if (TextField.search(/magen/i) != -1) {Color = "Magenta";}
if (TextField.search(/salmon/i) != -1) {Color = "Salmon";}

//imposta il colore
Hue.setColorAllHue.setColor(Color);