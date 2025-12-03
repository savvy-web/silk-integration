---
"@savvy-web/linked-1": patch
---

fix: account for elephant trunk weight in balance calculations

Oh no, we discovered something truly terrifying! Our elephant balance scale component was completely ignoring trunk weight distribution this whole time. Large elephants appeared wobbly and off-balance even when they were standing perfectly still - and we couldn't figure out why!

After many sleepless nights of anxious code review (what if an elephant actually fell?!), we finally found the culprit: the trunk. An elephant's trunk can account for up to 140kg of weight, and when extended or raised, it dramatically shifts the center of gravity. We were so focused on body mass that we forgot about this crucial appendage!

- Adds trunk weight factor to all balance calculations (finally!)
- Considers trunk position state (raised, lowered, extended, curled)
- Includes trunk length as a variable in the center-of-gravity formula
- Added extensive safety margins because we really, really don't want elephants falling over
