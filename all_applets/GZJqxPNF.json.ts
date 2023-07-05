const txt = Trigger.Text || ""
let price = parseInt((txt.match(/\s\$(\d+)\s/))[1])

if (price > 400) {
  EmailDigest.sendDailyEmail.skip("Too expensive")
}
