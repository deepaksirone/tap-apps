if (AirByPropeller.forecasts.ForecastRiskLevel === AirByPropeller.forecasts.LastForecastRiskLevel || AirByPropeller.forecasts.ForecastRiskLevel !== 'high'){
  IfNotifications.sendNotification.skip();
}