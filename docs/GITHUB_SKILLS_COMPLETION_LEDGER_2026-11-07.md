# GitHub Skills — Verified Training Ledger

**Verified on:** 2026-11-07  
**GitHub account:** [Nanodagr8](https://github.com/Nanodagr8)  
**Training policy:** Free-only. No paid certification exams, subscriptions, or purchased cloud runtime. This ledger records completed **GitHub Skills exercises**, not formal GitHub certification exams or independently issued digital badges.

## Completed exercises (all eight official walkthrough issues closed)

| Exercise | Evidence | Key verified work |
| --- | --- | --- |
| Idea to Merge with the Copilot App | [Repository](https://github.com/Nanodagr8/skills-idea-to-merge-with-the-copilot-app) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-idea-to-merge-with-the-copilot-app/issues/1) | 5 automated steps passed; original URL + `mona-` slug saved using browser localStorage; unit tests, Astro build and real Chromium screenshot accepted; issue-to-PR-to-merge; roadmap issues. |
| Introduction to GitHub | [Repository](https://github.com/Nanodagr8/skills-introduction-to-github) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-introduction-to-github/issues/1) | Created `my-first-branch`, committed `PROFILE.md`, opened and merged PR #2; final congratulations issued. |
| Communicate using Markdown | [Repository](https://github.com/Nanodagr8/skills-communicate-using-markdown) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-communicate-using-markdown/issues/1) | Markdown headings, task checklist, language-tagged fenced bash block, accessible HTML image; merged PR #2; all five steps and final instructor review. |
| Resolve Merge Conflicts | [Repository](https://github.com/Nanodagr8/skills-resolve-merge-conflicts) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-resolve-merge-conflicts/issues/1) | Reproduced a real conflicting edit to `resume.md`, preserved the `my-resume` side intentionally, committed reverse merge resolution, merged PR #2; final review issued. |
| Review pull requests | [Repository](https://github.com/Nanodagr8/skills-review-pull-requests) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-review-pull-requests/issues/1) | Opened PR #2; assigned owner, submitted a review, posted a line-specific suggestion, applied the suggested wording, and merged. Steps 1–5 passed and final review confirmed completion. |

| Hello GitHub Actions | [Repository](https://github.com/Nanodagr8/skills-hello-github-actions) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-hello-github-actions/issues/1) | Created PR-triggered GitHub Actions workflow, Ubuntu job, GitHub CLI welcome comment, verified successful run and merged PR #2. |
| Test with Actions | [Repository](https://github.com/Nanodagr8/skills-test-with-actions) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-test-with-actions/issues/1) | Reproduced failing Fibonacci test, fixed expected result, added negative-input tests: 7 passing tests, 100% coverage, active main ruleset requiring python-coverage, repaired Python CI matrix, merged PR #2. |
| GitHub Pages | [Repository](https://github.com/Nanodagr8/skills-github-pages) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-github-pages/issues/1) / [Live site](https://nanodagr8.github.io/skills-github-pages/) | Enabled free public GitHub Pages, customized engineering homepage, configured Jekyll minima, published dated blog post. Final review complete, HTTP 200 verified. |

## Reusable engineering knowledge

- GitHub flow: branch → focused commit → pull request → diff review → merge → traceable completion.
- CI quality gates: establish a failing baseline, correct test expectations, expand coverage to 100%, and require passing checks before merging.
- Public documentation: publish Jekyll content using the minima theme and date-stamped posts with valid YAML front matter.
- Review workflow: clarify a PR's purpose, self-assign responsibility, submit meaningful line-specific feedback, apply a suggested change, and verify the resulting merge.
- Git merge conflicts: inspect both versions, decide the intended semantics, resolve on the feature branch, commit a merge resolution and retest before merging the PR.
- GitHub-flavored Markdown: headings; linked checklists; language-highlighted code fences; accessible image alternative text and sizing.
- Client-only state in Astro: `localStorage` use must occur within a browser-side script or hydration boundary; never during SSR.
- Verification: distinguish automated course signals from direct code validation. The bookmark project had 4 passing unit tests, a passing production build, and Chromium validation of persisted data and screenshot evidence.
- Development safeguards: preserve existing Nano Studios repositories, use isolated training projects, review diffs before merging, and keep formal certification claims distinct from course completion.

## Known caveats

- The Copilot App course was completed using GitHub CLI, the GitHub connection and local browser automation; GitHub verified the repository signals, but not every interaction was performed within the Copilot App's own GUI.
- The Copilot App seed repository emitted Dependabot security warnings; investigate and patch advisories before any production reuse.
- No evidence was collected that completion issued a separate Credly badge or passed a paid GitHub certification exam.
- Courses beyond the eight listed here were **not** marked complete in this ledger.

## Recommended next free course

[Review pull requests](https://github.com/skills/review-pull-requests), then [Ship with Quality](https://github.com/skills/ship-with-quality) when the template and any tool requirements are confirmed free. Keep each exercise's grading signals and evidence separate.

## Free-only continuation / blockers

- In progress as of this update: [Work with Workflow Artifacts](https://github.com/Nanodagr8/skills-workflow-artifacts); not yet counted as complete.
- [Ship with Quality](https://github.com/skills/ship-with-quality) cannot be completed using this personal account because its Code Quality prerequisite is organization-only. No upgrade or paid entitlement was used.
- No Codespace was started; Python tests were run locally on the connected Windows computer to avoid metered cloud development.
