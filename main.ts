// Monday Morning Punchlines — one joke about Monday mornings, <= 200 chars.
// Judge brief (from kit RULES.txt), most important first:
//   1. Really about Monday mornings.
//   2. Earns a real laugh: a turn / punchline that lands, not just a complaint.
//   3. Surprising twist, not the first thing anyone would think of.
//   4. Economy: every word does work, no wasted setup.
//   5. Fresh: no tired Monday cliches ("I hate Mondays", generic coffee jokes).
//
// Candidate lines drafted for this entry:
//  1. "My Monday morning alarm doesn't wake me up; it files a missing-person
//      report on the version of me who agreed to this on Friday."
//  2. "Monday morning is just Friday night seen through HR."
//  3. "On Monday morning my coffee needs coffee, my bed files for custody, and
//      my motivation sends a resignation letter dated last week."
//  4. "Monday morning hit me so hard my weekend filed a restraining order."
//  5. "My Monday stand-up meeting could've been an email; so could I — please
//      just forward me to Friday."
//  6. "Monday morning: the only blind date I already know will be terrible and
//      still have to dress up for."
//  7. "I don't rise and shine on Monday morning. I rise and file a complaint
//      with whoever invented shining."
//  8. "Monday morning is the universe telling me the tutorial is over."
//  9. "My snooze button and I are in a committed relationship; Monday morning
//      is the third party trying to break us up."
// 10. "On Monday morning, even my shadow calls in sick — it refuses to follow
//      me into that fluorescent lighting."
//
// Revision pass:
//  - #3 and #9 are list/gimmick jokes; the judge brief warns a list of woes is
//    a complaint, not a joke. Cut.
//  - #2 and #8 are neat one-liners but the twist is thin; no character, no scene.
//  - #4 and #10 have a fresh image but the punch word arrives late and soft.
//  - #5 is workplace-true and the "so could I" turn is surprising, but it leans
//    on the well-worn "could've been an email" cliche for its setup.
//  - #1 wins: a concrete Monday-morning scene (the alarm), a genuinely
//    unexpected turn (a missing-person report), and a built-in second twist —
//    the missing person is the Friday self who caused it. Tightened below:
//    "optimistic idiot" names that Friday self in two words and sharpens the
//    blame joke; "isn't waking me up" sets up the report as a correction,
//    which makes the punchline land harder than a plain statement.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My Monday morning alarm isn't waking me up; it's filing a missing-person report for the optimistic idiot who set it on Friday.";

// Gate guard: the sealed scorer only judges UTF-8 text of 1-200 characters,
// so fail loudly here rather than ship an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: writeFileSync writes exactly the string given.
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
