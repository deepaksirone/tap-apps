var EventCity = Songkick.newEventFromTrackedArtist.EventCity
var subject = "Nashville"

if (EventCity.indexOf(subject) < 0) {
    IfNotifications.sendNotification.skip("Not in Nashville")
    Email.sendMeEmail.skip("No in Nashville")
}
