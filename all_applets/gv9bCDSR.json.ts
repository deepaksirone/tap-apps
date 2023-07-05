var msec = (Date.parse(Ohmconnect.ohmHourStart.OhmHourEnd) - Date.parse(Ohmconnect.ohmHourStart.OhmHourStart));
var hours = Math.floor(msec / 60*60*1000);
GoogleSheets.appendToGoogleSpreadsheet.setFormattedRow(Ohmconnect.ohmHourStart.OhmHourStart + '|||' + Ohmconnect.ohmHourStart.OhmHourEnd + "||| Start ||| " + hours.toString());
