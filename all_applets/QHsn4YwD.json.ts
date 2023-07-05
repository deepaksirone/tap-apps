if (AirByPropeller.forecasts.ForecastRiskLevel === AirByPropeller.forecasts.LastForecastRiskLevel || AirByPropeller.forecasts.ForecastRiskLevel !== 'high'){
  WemoSwitch.attributeSocketOnDiscrete.skip()
}