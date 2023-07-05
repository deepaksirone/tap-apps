// if Cta.newRailAlert.AlertContent does not include "late", then Dominos.launchEasyOrder.skip()
const content = Cta.newRailAlert.AlertContent
if ( (content.indexOf('late') < 0) && (content.indexOf('delay') < 0) ) {
  Dominos.launchEasyOrder.skip()
}