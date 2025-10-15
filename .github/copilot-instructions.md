## Repo overview

This repository contains materials for a Demo Time presentation used at CollabDays Belgium. Primary content lives under `.demo/` and at the repo root. The project is not a runnable application — it's a collection of session metadata, demo scripts, and supporting files.

Key files/directories
- `.demo/demotime.yaml` — the session definition (demos, steps, timer). Use this to update demo order, titles, and step content.
- `session.json` — high-level session metadata (title, speakers). Small JSON file used by documentation.
- `.vscode/`, `.gitignore` — standard editor and VCS configs.

What to focus on when making changes

- Preserve YAML structure in `.demo/demotime.yaml`. The top-level keys are `title`, `description`, `version`, `demos`, and `timer`. Each demo entry is a mapping with optional `id`, `title`, `description`, `steps` (list).
- Avoid renaming or moving `.demo/demotime.yaml` unless also updating any scripts or docs that reference it elsewhere.
- Keep `session.json` valid JSON. It's a small metadata file and may be consumed by tooling or the presentation engine.

Developer workflows & commands

- There are no build or test commands in this repository. Changes are content edits. Use your editor to preview YAML and JSON formatting.
- Use `git` for changes. When adding demos, keep `id` values unique (alphanumeric with dashes). Prefer small commits with clear messages (e.g., "demo: add terminal examples step").

Conventions and patterns

- Demo entries may have an `id` (slug-like string). If present, keep it stable; external integrations may reference these ids.
- `steps` is where scripted actions go; entries are usually simple text or structured objects depending on the demo tooling that consumes them. When in doubt, match the existing empty-list structure.

Integration points & external deps

- This repo references external tooling in descriptions (for example: "Start EngageTime desktop app"). There are no direct code integrations here; treat external apps as human-run steps.
- If you add automation (scripts, actions), document them clearly and add minimal CI workflows under `.github/workflows/`.

Examples (from this repo)
- To add a new demo:

  - Append an entry to `.demo/demotime.yaml` under `demos:` with `id`, `title`, `description`, and `steps: []`.

- To change the session title or description, edit the top-level `title` or `description` fields in `.demo/demotime.yaml`.

When to ask for human guidance

- If you need to introduce scripts, editors, or CI that change repository shape (new top-level folders, binaries), ask the maintainers about the expected distribution and whether this repo should remain content-only.
- If you need to guess the consumer of `demos` or `steps` structure (e.g., add fields beyond the ones present), ask for an example of the intended tooling that will consume the YAML.

Tone and commit style

- Make small, content-focused commits. Use present-tense imperative messages: "Add slide for EngageTime" or "Fix typo in demo title".

If anything in this guidance is unclear or you need examples of how demos are executed, ping the maintainers with a short description of the change you plan to make.
