const forecast = (Weather.currentWeatherAtTime as any)
const pairs = Object.getOwnPropertyNames(forecast).map(prop => prop + "||" + forecast[prop])
Datadotworld.append.setPayload(pairs.join("|||"))