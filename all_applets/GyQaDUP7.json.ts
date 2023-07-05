// if the current hour for the user is 8 AM or 12 PM, and if current minute is between 00 and 14, post
if ((Meta.currentUserTime.hour() === 8) || (Meta.currentUserTime.hour() === 12)) {
    if (Meta.currentUserTime.minute() >= 0 && Meta.currentUserTime.minute() < 15) {
        // if the forecast code is high --> poor, medium --> fair, low --> good
        if (AirByPropeller.forecasts.ForecastRiskLevel === 'high') {
            Twitter.postNewTweet.setTweet('The current local asthma condition is poor');
        } else if (AirByPropeller.forecasts.ForecastRiskLevel === 'medium') {
            Twitter.postNewTweet.setTweet('The current local asthma condition is fair');
        } else if (AirByPropeller.forecasts.ForecastRiskLevel === 'low') {
            Twitter.postNewTweet.setTweet('The current local asthma condition is good');
        } else {
            Twitter.postNewTweet.skip('Could not determine current local asthma condition... ForecastRiskLevel returned: ' + AirByPropeller.forecasts.ForecastRiskLevel);
        }
    } else {
    Twitter.postNewTweet.skip('Skip since it is not within the time range');
    }
} else {
  Twitter.postNewTweet.skip('Skip since it is not within the time range');
}