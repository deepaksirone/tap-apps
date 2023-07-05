if (AirByPropeller.forecasts.ForecastRiskLevel === 'high'){
  Hue.setColorAllHue.setColor('red');
} else if (AirByPropeller.forecasts.ForecastRiskLevel === 'medium') {
  Hue.setColorAllHue.setColor('orange')
} else if (AirByPropeller.forecasts.ForecastRiskLevel === 'low') {
  Hue.setColorAllHue.setColor('green');
} else {
  Hue.setColorAllHue.skip();
}