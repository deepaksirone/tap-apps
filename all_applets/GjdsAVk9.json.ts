var timeOfDay = Meta.currentUserTime.hour()
if (timeOfDay <6 || timeOfDay >= 22) {
    Heatmiser.setTemp.skip();
}
