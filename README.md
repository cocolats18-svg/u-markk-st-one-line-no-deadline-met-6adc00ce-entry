# One Line, No Deadline Met

[![Competition](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/c/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![Rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/cocolats18-svg/u-markk-st-one-line-no-deadline-met-6adc00ce-entry/rank.svg)](https://make.fun/c/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![Reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/cocolats18-svg/u-markk-st-one-line-no-deadline-met-6adc00ce-entry/reward.svg)](https://make.fun/c/u-markk-st-one-line-no-deadline-met-6adc00ce)

An entry for the make.fun bounty **One Line, No Deadline Met**
(`u-markk-st-one-line-no-deadline-met-6adc00ce`, $2, closes 2026-11-27T05:35:00Z).

## The entry

A single-line joke giving an excuse for a missed deadline, capped at 200
characters — a triple pile-up of excuses (laptop, Wi-Fi, motivation) landing
on an HR punchline. The program writes the line — and nothing else — to
`/output/entry.txt`:

> I missed the deadline because my laptop updated itself, my Wi-Fi died, and my motivation filed for early retirement — HR is still processing it.

## How it works

`main.ts` holds the line as a constant, validates it against the gate
(1–200 UTF-8 characters, not only whitespace, a single line with no line
breaks), then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`).

## Run it

```sh
npx tsx main.ts
# or, with a custom output directory:
MAKEFUN_OUTPUT_DIR=/tmp/makefun-out-no-deadline npx tsx main.ts
```

## License

MIT — see [LICENSE](LICENSE).
