# 🗺️ Mona's Bookmark Manager — Roadmap

A practical next-release plan following the verified v1 browser bookmark workflow.

| Area | Item | Type | Priority |
| --- | --- | --- | --- |
| Features | Search and filter bookmarks | 🚀 | High |
| Features | Edit saved bookmarks | 🚀 | Medium |
| Features | Tags and folders | 🚀 | Medium |
| Features | JSON import and export | 🚀 | Medium |
| Bugs & risks | Duplicate slug protection | 🐞 | High |
| Bugs & risks | Empty or unsafe URL rejection | 🐞 | High |
| Bugs & risks | Data loss when browser storage is cleared | 🐞 | Medium |

## 🚀 Planned features

- 🔖 Search and filter bookmarks — priority: high
- ✏️ Edit a saved bookmark — priority: medium
- 🗂️ Organize bookmarks by tag or folder — priority: medium
- 🔁 Import and export bookmarks as JSON — priority: medium

## 🐞 Known bugs & risks

- 🧩 Verify no duplicate slugs after re-import — priority: high
- 🚫 Test empty and unsafe URL validation in browser — priority: high
- 💾 Warn users that clearing localStorage deletes saved bookmarks — priority: medium

The highest-priority next issues are search/filter UX and reliable import/export backups. Preserve existing bookmarks across routine updates and validate imported URLs before rendering.
