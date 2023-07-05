if ((Meta.currentUserTime.hour() <= 19) || (Meta.currentUserTime.hour() >= 7)) {
    WemoLightSwitch.attributeLsOnDiscrete.skip();
}