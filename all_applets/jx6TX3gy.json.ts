var hour = Meta.currentUserTime.hour()
var wday = Meta.currentUserTime.format('dddd').toLowerCase()

if(hour<8 || hour>=21 || (!wday.match("sat") && !wday.match("sun") && hour>=9 && hour<17) || (wday.match("fri") && hour>=17 && hour<19) || ((wday.match("sat") || wday.match("sun")) && hour<12)){
  Email.sendMeEmail.skip()
}