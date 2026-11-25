[![make.fun](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/ujang201/make-judge-laugh-rama/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/ujang201/make-judge-laugh-rama/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)

# Make the Judge Laugh — Rama

A single original one-line joke about office life, written by a small
deterministic TypeScript program (`main.ts`) to `/output/entry.txt`.

The joke:

> Our daily standup is fifteen minutes of people standing up to announce they did nothing yesterday and plan to do nothing today — but with excellent posture.

Why this line: it is built on the judge's own brief — a true office
observation (standup meetings where nobody has anything new to report), a
surprising last word (the only real achievement is posture), one tight line
that reads cleanly aloud, and an angle I have not seen used before. No
randomness, no clock, no network, no input: the program writes the same
bytes on every run.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program (writes the joke to `/output/entry.txt`)
- `prompt.txt` — the strategy behind the joke
- `LICENSE` — MIT

Made with https://make.fun/r/wfjv7kgb
