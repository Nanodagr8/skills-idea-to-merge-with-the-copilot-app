# GitHub Skills — Verified Training Ledger

**Verified on:** 2026-11-07  
**GitHub account:** [Nanodagr8](https://github.com/Nanodagr8)  
**Training policy:** Free-only. No paid certification exams, subscriptions, or purchased cloud runtime. This ledger records completed **GitHub Skills exercises**, not formal GitHub certification exams or independently issued digital badges.

## Completed exercises (all eleven official walkthrough issues closed)

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
| Work with Workflow Artifacts | [Repository](https://github.com/Nanodagr8/skills-workflow-artifacts) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-workflow-artifacts/issues/1) | Uploaded coverage and single-file Playwright HTML reports, reused a build artifact in dev and cross-workflow prod simulation. All four official steps and downstream workflows passed; pinned Ubuntu 24.04 to correct Playwright compatibility. No production deployment. |
| Reusable Workflows | [Repository](https://github.com/Nanodagr8/skills-reusable-workflows) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-reusable-workflows/issues/1) | Created reusable Node lint, coverage and Playwright workflow; invoked it from CI with permission-scoped GitHub Pages deployment and PR feedback. Six final CI jobs passed; merged PR #5. |
| Introduction to Repository Management | [Repository](https://github.com/Nanodagr8/skills-introduction-to-repository-management) / [Closed instructor issue #1](https://github.com/Nanodagr8/skills-introduction-to-repository-management/issues/1) | Protected main with a ruleset; added .gitignore, CODEOWNERS, CONTRIBUTING, Code of Conduct, issue templates, Dependabot and security policy; enabled free CodeQL default scanning and private vulnerability reporting; merged PRs #2 and #3. |

## Reusable engineering knowledge

- GitHub flow: branch → focused commit → pull request → diff review → merge → traceable completion.
- Reusable workflow permissions: keep least-privilege ceilings at callers and explicitly grant Pages or pull-request write permissions only to jobs that require them.
- Repository governance: maintain branch rulesets, CODEOWNERS, contribution standards, issue templates, security reporting, Dependabot, and CodeQL for public training projects.
- Workflow artifact discipline: preserve coverage and browser evidence, download immutable builds in downstream jobs, and pin compatible runners for Playwright.
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
- Courses beyond the eleven listed here were **not** marked complete in this ledger.

## Next free course candidates

- [Release-based Workflow](https://github.com/skills/release-based-workflow): tags, releases, release notes, and hotfixes; not started.
- [Introduction to Git](https://github.com/skills/introduction-to-git): Git CLI, branching, diffs, and local merges; not started. Use isolated local Git config and avoid metered Codespaces.
- [Introduction to CodeQL](https://github.com/skills/introduction-to-codeql): public-repository code scanning; not started.
- [Ship with Quality](https://github.com/skills/ship-with-quality): blocked for personal accounts by the organization-only Code Quality prerequisite; do not buy an upgrade.

## Free-only continuation / blockers

- Completed and verified: [Work with Workflow Artifacts](https://github.com/Nanodagr8/skills-workflow-artifacts). The optional protected-environment reviewer gate was not configured; simulated deployment jobs did not publish to external infrastructure.
- [Ship with Quality](https://github.com/skills/ship-with-quality) cannot be completed using this personal account because its Code Quality prerequisite is organization-only. No upgrade or paid entitlement was used.
- No Codespace was started; Python tests were run locally on the connected Windows computer to avoid metered cloud development.
- The Reusable Workflows sample deployed to its free **public training GitHub Pages site** (as required by the exercise); the unrelated Nano Studios repositories were unchanged.
- GitHub CodeQL default setup was enabled on the public Repository Management training project; its initial setup workflow passed. This is a free public-repository feature, not a paid certification.

## Execution and continuity protocol

For subsequent free-skills challenges: inspect the official requirements; avoid paid courses, credits, subscriptions, and metered development environments; use isolated public training repositories; run tests and review diffs; distinguish temporary failed checks from the final accepted grade; record only closed instructor issues as completions; save links and reproduction evidence here; leave unrelated Nano Studios repositories unchanged. Do not claim a separate certification or digital badge without the issuer's evidence.
