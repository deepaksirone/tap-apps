// Actually regexes.
var rainy_conditions = [ "Ice Crystals", 
                         "Ice Pellets",
                         "Spray",
                         "Mist",
                         "Showers",
                         "Thunderstorms",
                         "Drizzle",
                         "Rain",
                         "Hail",
                         "Unknown Precipitation" ];

var condition = Weather.currentWeatherAtTime.TodaysCondition;

function MatchesCurrentCondition(substring: string) {
  return condition.match(substring) != null;
}

if (!rainy_conditions.some(MatchesCurrentCondition)) {
  Hue.setScene.skip()
}