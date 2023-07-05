var time = Meta.currentUserTime.hour();
if (time > 17 || time < 9) {
    //Ewelink.plugAction;
}
else { 
    Ewelink.plugAction.skip("Muito Cedo Para Acender: " + time.toString());
}
