if (AirByPropeller.forecasts.ForecastRiskLevel === AirByPropeller.forecasts.LastForecastRiskLevel){
  IfNotifications.sendNotification.skip();
} else {
  if (AirByPropeller.forecasts.ForecastRiskLevel === 'high') {
      IfNotifications.sendNotification.setMessage('Asthma conditions are now poor for ' + AirByPropeller.forecasts.PostalCode);
  } else if (AirByPropeller.forecasts.ForecastRiskLevel === 'medium') {
      IfNotifications.sendNotification.setMessage('Asthma conditions are now fair for ' + AirByPropeller.forecasts.PostalCode);
  } else if (AirByPropeller.forecasts.ForecastRiskLevel === 'low') {
      IfNotifications.sendNotification.setMessage('Asthma conditions are now good for ' + AirByPropeller.forecasts.PostalCode);
  } else {
      IfNotifications.sendNotification.skip('Could not determine current local asthma condition... ForecastRiskLevel returned: ' + AirByPropeller.forecasts.ForecastRiskLevel);
  }
}