// http://www.unternehmerpositionen.de/fileadmin/user_upload/up/Wirtschaft/17-08/Wochenbarometer_17-08-2017.pdf

var now = Meta.triggerTime
var day = now.format('DD')
var month = now.format('MM')
var year = now.format('YYYY')

var url = 'http://www.unternehmerpositionen.de/fileadmin/user_upload/up/Wirtschaft/' + day + '-' + month + '/Wochenbarometer_' + day + '-' + month + '-' + year + '.pdf'
var message = `HSH Nordbank Wochenbarometer für ${Meta.triggerTime.format('LL')}:\n${url}`

Slack.postToChannel.setMessage(message)