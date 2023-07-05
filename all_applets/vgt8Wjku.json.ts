if (
  DoButton.doButtonNewCommandCommon.Latitude==null ||
  DoButton.doButtonNewCommandCommon.Longitude==null ||
  parseFloat(DoButton.doButtonNewCommandCommon.Latitude)<52.1225 || 
  parseFloat(DoButton.doButtonNewCommandCommon.Latitude)>52.1245 ||
  parseFloat(DoButton.doButtonNewCommandCommon.Longitude)<7.370 ||
  parseFloat(DoButton.doButtonNewCommandCommon.Longitude)>7.372
) {
  Ewelink.plugAction.skip("Geofence -- "+DoButton.doButtonNewCommandCommon.Latitude+" - "+DoButton.doButtonNewCommandCommon.Longitude);
  Ewelink.switchAction.skip("Geofence -- "+DoButton.doButtonNewCommandCommon.Latitude+" - "+DoButton.doButtonNewCommandCommon.Longitude);
}
