function freedomize(original: string): string {
  return original.
    replace(/Trump/ig, "Supreme Leader").
    replace("SNL", "failing NBC comedy show").
    replace(/gun/ig, "freedom projector").
    replace(/Hillary/ig, "election LOSER")
}

var s = freedomize(Trigger.Title);
Email.sendMeEmail.setSubject("Freedomized: " + s)
Email.sendMeEmail.setBody(freedomize(Trigger.Description))
