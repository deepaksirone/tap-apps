// if NjTransit.newLightRailAdvisory.ContentHtml does not include "late", then Dominos.launchEasyOrder.skip()
const content = NjTransit.newLightRailAdvisory.ContentHtml
if ( (content.indexOf('late') < 0) && (content.indexOf('delay') < 0) ) {
  Dominos.launchEasyOrder.skip()
}