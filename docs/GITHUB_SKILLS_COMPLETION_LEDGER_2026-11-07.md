# GitHub Skills — Verified Training Ledger

**Verified on:** 2026-11-07  
**GitHub account:** [Nanodagr8](https://github.com/Nanodagr8)  
**Training policy:** Free-only. No paid certification exams, subscriptions, or purchased cloud runtime. This ledger records completed **GitHub Skills exercises**, not formal GitHub certification exams or independently issued digital badges.

## Completed exercises (all official walkthrough issues closed)

| Exercise | Evidence | Key verified work |
| --- | --- | --- |
| Idea to Merge with the Copilot App | [Repository](https://github.com/Nanodagr8/skills-idea-to-merge-with-the-copilot-app) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-idea-to-merge-with-the-copilot-app/issues/1) | 5 automated steps passed; original URL + `mona-` slug saved using browser localStorage; unit tests, Astro build and real Chromium screenshot accepted; issue-to-PR-to-merge; roadmap issues. |
| Introduction to GitHub | [Repository](https://github.com/Nanodagr8/skills-introduction-to-github) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-introduction-to-github/issues/1) | Created `my-first-branch`, committed `PROFILE.md`, opened and merged PR #2; final congratulations issued. |
| Communicate using Markdown | [Repository](https://github.com/Nanodagr8/skills-communicate-using-markdown) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-communicate-using-markdown/issues/1) | Markdown headings, task checklist, language-tagged fenced bash block, accessible HTML image; merged PR #2; all five steps and final instructor review. |
| Resolve Merge Conflicts | [Repository](https://github.com/Nanodagr8/skills-resolve-merge-conflicts) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-resolve-merge-conflicts/issues/1) | Reproduced a real conflicting edit to `resume.md`, preserved the `my-resume` side intentionally, committed reverse merge resolution, merged PR #2; final review issued. |

## Reusable engineering knowledge

- GitHub flow: branch → focused commit → pull request → diff review → merge → traceable completion.
- Git merge conflicts: inspect both versions, decide the intended semantics, resolve on the feature branch, commit a merge resolution and retest before merging the PR.
- GitHub-flavored Markdown: headings; linked checklists; language-highlighted code fences; accessible image alternative text and sizing.
- Client-only state in Astro: `localStorage` use must occur within a browser-side script or hydration boundary; never during SSR.
- Verification: distinguish automated course signals from direct code validation. The bookmark project had 4 passing unit tests, a passing production build, and Chromium validation of persisted data and screenshot evidence.
- Development safeguards: preserve existing Nano Studios repositories, use isolated training projects, review diffs before merging, and keep formal certification claims distinct from course completion.

## Known caveats

- The Copilot App course was completed using GitHub CLI, the GitHub connection and local browser automation; GitHub verified the repository signals, but not every interaction was performed within the Copilot App's own GUI.
- The Copilot App seed repository emitted Dependabot security warnings; investigate and patch advisories before any production reuse.
- No evidence was collected that completion issued a separate Credly badge or passed a paid GitHub certification exam.
- Courses beyond the four listed here were **not** marked complete in this ledger.

## Recommended next free course

[Review pull requests](https://github.com/skills/review-pull-requests), then [Ship with Quality](https://github.com/skills/ship-with-quality) when the template and any tool requirements are confirmed free. Keep each exercise's grading signals and evidence separate.
