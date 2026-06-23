# WordPress Image Migration — Inventory & Plan

_Generated from `Daynedesign/`. 165 unique images, 562 total references across 18 files._

All images currently load from one host: `i0.wp.com/daynepetera.wordpress.com/wp-content/uploads/...` (WordPress.com's Photon CDN).


## ⚠️ Access notes

- **Photon refuses unsigned requests.** A bare URL (no `?…` query) returns **403**; appending a width query (e.g. `?w=9999&ssl=1`) returns the **full-resolution original** (Photon never upscales, so a huge width just yields native size).
- **68 image(s) are referenced in the markup with NO query string** — worth spot-checking these on the live site, they may already be fragile. Listed in the index below with `bare` flag.
- Higher-fidelity alternative: pull the same files straight from your **WordPress Media Library** (admin at `daynepetera.wpcomstaging.com/wp-admin/`) — true originals, no Photon recompression. Filenames match the basenames below; watch for WP's `-e<timestamp>` edited-image variants.

## Also needs changing (not just `<img>` tags)

These reference the CDN in **code**, not as plain image URLs — they'll break on rewrite if missed:

- **Lightbox full-size logic** — `case-study.js` (line ~86) plus inline copies in **8 pages** (`drive`, `easybridge`, `k12`, `loudmouth`, `scout`, `realize`, `sprint`, `vlogger`) run:
  ```js
  const fullSrc = img.src.replace(/^https:\/\/i\d+\.wp\.com\//, 'https://').split('?')[0];
  ```
  This strips the Photon prefix to load the full-size image from `daynepetera.wordpress.com/wp-content/uploads/...` directly. Once images are local and already full-res, this becomes `const fullSrc = img.src;` (no transform) — otherwise every lightbox click 404s.
- **`CLAUDE.md` → "Image hosting"** currently instructs *"use Jetpack CDN for everything else… Do not change them."* That convention must flip to local-only, or future edits will reintroduce CDN URLs.

> **Email is safe.** `dayne.design` MX / Google Workspace runs on WordPress.com DNS. Rehosting images touches none of that — it's fully decoupled. (Fully *canceling* WordPress later would be a separate DNS+email migration.)

## Proposed rehost target

Drop files into the repo, preserving the date path to avoid name collisions, then rewrite references:

```
OLD:  https://i0.wp.com/daynepetera.wordpress.com/wp-content/uploads/2017/04/scout_dashboard.png?w=800&ssl=1
NEW:  /assets/images/wp/2017/04/scout_dashboard.png
```

## 1. Images by page


### `404.html` — 6 unique (6 refs)
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `deck/index.html` — 20 unique (31 refs)
- `2017/04/screencapture-pearsonrealize-community-classes-3e08dc24034f49559e1e6647cd24d09f-assignments-1492470064384.png`
- `2020/09/overview400.5x.png`
- `2020/10/artboard.png`
- `2023/01/comments-1.png`
- `2023/01/login-1.png`
- `2023/01/main-view-2.png`
- `2023/01/scope-items.png`
- `2023/02/card_ideation_pro-1.png`
- `2023/02/main-feature-hero.png`
- `2023/02/pro_wires_2.png`
- `2023/02/rivet-colors.png`
- `2023/02/rivet-standard-button.png`
- `2023/02/rivet-type.png`
- `2023/02/rivet-welcome.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2023/02/vendor_xp_story_map_1-2.png`
- `2023/02/vinny_vendor_owner.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `drive.html` — 14 unique (17 refs)
- `2017/01/dive_mockup2.png`
- `2017/01/drive_mockup-e1491240476632.png`
- `2017/01/ia.jpg`
- `2017/01/sketching.jpg`
- `2017/01/wire11-e1490729895261.png`
- `2017/01/wire21-e1490729919985.png`
- `2017/01/wire31-e1490730041954.png`
- `2017/01/wire41-e1490729984689.png`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `easybridge.html` — 9 unique (12 refs)
- `2017/04/eb_front.png`
- `2017/04/eb_main_01.jpg`
- `2017/04/eb_main_02.jpg`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `global.css` — 14 unique (20 refs)
- `2017/01/dive_mockup2.png`
- `2017/04/eb_front.png`
- `2017/04/k12_featured1.png`
- `2017/04/realize1.png`
- `2017/04/scout_dashboard.png`
- `2018/03/sprint1.png`
- `2018/03/vlogger_4.png`
- `2020/10/artboard.png`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `hris-sync.html` — 28 unique (79 refs)
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/archive-1.png`
- `2026/02/archive-2.png`
- `2026/02/archive-3.png`
- `2026/02/bulk-add-1.png`
- `2026/02/bulk-add-3.png`
- `2026/02/field-locked-down.png`
- `2026/02/hris-hero-lg-1.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/hris-main-pages.png`
- `2026/02/link-record-to-user.png`
- `2026/02/p0-components-1.png`
- `2026/02/phase-0-hero.png`
- `2026/02/phase-0-rows.png`
- `2026/02/phase-1-components-3.png`
- `2026/02/phase-1-manage-users-accordion-open-2.png`
- `2026/02/phase-1-rows.png`
- `2026/02/phase-2-components-3.png`
- `2026/02/phase-2-hero.png`
- `2026/02/product-info-1.png`
- `2026/02/rules-filled.png`
- `2026/02/rules-modal-complex.png`
- `2026/02/rules-modal-cross-disabled.png`
- `2026/02/rules.png`
- `2026/02/software-and-tools-hero-1.png`

### `index.html` — 14 unique (26 refs)
- `2017/01/dive_mockup2.png`
- `2017/04/eb_front.png`
- `2017/04/k12_featured1.png`
- `2017/04/realize1.png`
- `2017/04/scout_dashboard.png`
- `2018/03/sprint1.png`
- `2018/03/vlogger_4.png`
- `2020/10/artboard.png`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `k12.html` — 16 unique (19 refs)
- `2017/04/k12_featured1.png`
- `2017/04/screen_1.png`
- `2017/04/screen_10.png`
- `2017/04/screen_2.png`
- `2017/04/screen_3.png`
- `2017/04/screen_4.png`
- `2017/04/screen_6.png`
- `2017/04/screen_7.png`
- `2017/04/screen_8.png`
- `2017/04/screen_9.png`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `lessen-pro.html` — 22 unique (58 refs)
- `2020/10/splash.png`
- `2023/01/comments-1.png`
- `2023/01/filters.png`
- `2023/01/login-1.png`
- `2023/01/main-view-2.png`
- `2023/01/overview-1.png`
- `2023/01/pro-hero.png`
- `2023/01/scope-items.png`
- `2023/01/start-complete-job.png`
- `2023/02/card_ideation_pro-1.png`
- `2023/02/main-feature-hero.png`
- `2023/02/oliver_owner_operator.png`
- `2023/02/pro_wires_2.png`
- `2023/02/screen_shot_2023-02-04_at_5.17.43_pm.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2023/02/ted_the_tech.png`
- `2023/02/vendor_xp_story_map_1-2.png`
- `2023/02/vinny_vendor_owner.png`
- `2023/02/wires_iteration_example_pro.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `loudmouth.html` — 12 unique (15 refs)
- `2020/06/group-18-copy-10.png`
- `2020/06/group-18.png`
- `2020/06/group-27.png`
- `2020/06/group-28.png`
- `2020/06/powerbi_shot-1.png`
- `2020/10/artboard.png`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `realize.html` — 17 unique (20 refs)
- `2017/04/artboard-5-copy-21.png`
- `2017/04/artboard-5-copy1.png`
- `2017/04/artboard-51.png`
- `2017/04/lti-step_1.png`
- `2017/04/lti-step_2.png`
- `2017/04/lti-step_4.png`
- `2017/04/realize1.png`
- `2017/04/screencap.png`
- `2017/04/screencapture-pearsonrealize-community-classes-3e08dc24034f49559e1e6647cd24d09f-assignments-1492470064384.png`
- `2017/04/screencapture-pearsonrealize-community-data-06f8c022f81b423b9c4f565c92112328-overview-1492469712797.png`
- `2017/04/screencapture-pearsonrealize-community-home-1492470016925.png`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `rivet.html` — 20 unique (52 refs)
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/atoms-inputs-selectioncontrol-properties-e28b85-storybook-2023-02-10.png`
- `2023/02/rivet-colors.png`
- `2023/02/rivet-design-approach.png`
- `2023/02/rivet-logo_rectangle402x.png`
- `2023/02/rivet-molecule-accordion.png`
- `2023/02/rivet-molecule-form.png`
- `2023/02/rivet-standard-button.png`
- `2023/02/rivet-toast.png`
- `2023/02/rivet-type.png`
- `2023/02/rivet-welcome.png`
- `2023/02/screenshot-2023-02-09-at-4.56.40-pm.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2023/02/selection-control.png`
- `2023/02/selection_component_example.gif`
- `2023/02/thumbnail-preview.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `scout.html` — 11 unique (14 refs)
- `2017/04/assessment_checklist.png`
- `2017/04/media_ui.png`
- `2017/04/ongoing_assessment.png`
- `2017/04/scout_dashboard.png`
- `2017/04/to_do_ui.png`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `software-tools.html` — 23 unique (61 refs)
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/add-content.png`
- `2026/02/add-owner.png`
- `2026/02/add-tool.png`
- `2026/02/chris-sketch.png`
- `2026/02/flowchart-1.png`
- `2026/02/group-tool-1.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/new-edit-ux.gif`
- `2026/02/profile-tool-1.png`
- `2026/02/relationship_diagram.png`
- `2026/02/software-and-tools-hero-1.png`
- `2026/02/software-and-tools-hero-3.png`
- `2026/02/software-populated-view.png`
- `2026/02/software-sidebar01.png`
- `2026/02/software-sidebar02.png`
- `2026/02/tools-c1-1.png`
- `2026/02/tools-v0.png`
- `2026/02/tools-v2-1.png`
- `2026/02/tools-v2.png`

### `sprint.html` — 26 unique (29 refs)
- `2018/03/affinity-mapped.jpg`
- `2018/03/failure-areas.jpg`
- `2018/03/first-run.jpg`
- `2018/03/goals-failures-hmws-target.jpg`
- `2018/03/goals.jpg`
- `2018/03/img_1023.jpg`
- `2018/03/img_1036.jpg`
- `2018/03/img_1037.jpg`
- `2018/03/img_1038.jpg`
- `2018/03/img_1040.jpg`
- `2018/03/img_1041.jpg`
- `2018/03/img_1053.jpg`
- `2018/03/img_1062.jpg`
- `2018/03/prortyping.jpg`
- `2018/03/sites.jpg`
- `2018/03/sites2.jpg`
- `2018/03/sprint1.png`
- `2018/03/testing.jpg`
- `2018/03/what-teacher-currently-does.jpg`
- `2018/03/what-we-want-students-to-feel.jpg`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `strongmind.html` — 21 unique (55 refs)
- `2020/09/attendance400.5x.png`
- `2020/09/content_feed400.5x.png`
- `2020/09/overview.png`
- `2020/09/overview400.5x.png`
- `2020/10/iteration_board-1.png`
- `2020/10/proto_1.png`
- `2020/10/proto_2.png`
- `2020/10/proto_example.gif`
- `2020/10/proto_gif.gif`
- `2020/10/pxl_20201004_185129612-1.jpg`
- `2020/10/pxl_20201004_185232222-2.jpg`
- `2020/10/splash.png`
- `2020/10/student_1_drk.png`
- `2020/10/student_1_wht.png`
- `2020/10/student_overview_lockout_closed_mob_par.png`
- `2020/10/student_overview_lockout_closed_mob_par4.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `veho.html` — 14 unique (34 refs)
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/alexis-the-associate-1.png`
- `2024/02/damaged-1.png`
- `2024/02/full_decision_tree.png`
- `2024/02/larry-the-lead-1.png`
- `2024/02/problem-solve.gif`
- `2024/02/sam-the-supervisor-1.png`
- `2024/02/showcase.png`
- `2024/02/showcase.reg_.png`
- `2024/05/main-feature-hero.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

### `vlogger.html` — 10 unique (14 refs)
- `2018/03/vlogger_1.png`
- `2018/03/vlogger_2.png`
- `2018/03/vlogger_3.png`
- `2018/03/vlogger_4.png`
- `2020/10/splash.png`
- `2023/01/pro-hero.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2024/02/showcase.reg_.png`
- `2026/02/hris-hero-lg.png`
- `2026/02/software-and-tools-hero-1.png`

## 2. Image index (what uses each file)

| # | Image (path under uploads/) | Refs | Used in | Flags |
|---|---|---|---|---|
| 1 | `2017/01/dive_mockup2.png` | 6 | drive.html×4, global.css, index.html | bare-ref |
| 2 | `2017/01/drive_mockup-e1491240476632.png` | 1 | drive.html | bare-ref WP-edited |
| 3 | `2017/01/ia.jpg` | 1 | drive.html | bare-ref |
| 4 | `2017/01/sketching.jpg` | 1 | drive.html | bare-ref |
| 5 | `2017/01/wire11-e1490729895261.png` | 1 | drive.html | bare-ref WP-edited |
| 6 | `2017/01/wire21-e1490729919985.png` | 1 | drive.html | bare-ref WP-edited |
| 7 | `2017/01/wire31-e1490730041954.png` | 1 | drive.html | bare-ref WP-edited |
| 8 | `2017/01/wire41-e1490729984689.png` | 1 | drive.html | bare-ref WP-edited |
| 9 | `2017/04/artboard-5-copy-21.png` | 1 | realize.html | bare-ref |
| 10 | `2017/04/artboard-5-copy1.png` | 1 | realize.html | bare-ref |
| 11 | `2017/04/artboard-51.png` | 1 | realize.html | bare-ref |
| 12 | `2017/04/assessment_checklist.png` | 1 | scout.html | bare-ref |
| 13 | `2017/04/eb_front.png` | 6 | easybridge.html×4, global.css, index.html | bare-ref |
| 14 | `2017/04/eb_main_01.jpg` | 1 | easybridge.html | bare-ref |
| 15 | `2017/04/eb_main_02.jpg` | 1 | easybridge.html | bare-ref |
| 16 | `2017/04/k12_featured1.png` | 6 | global.css, index.html, k12.html×4 | bare-ref |
| 17 | `2017/04/lti-step_1.png` | 1 | realize.html | bare-ref |
| 18 | `2017/04/lti-step_2.png` | 1 | realize.html | bare-ref |
| 19 | `2017/04/lti-step_4.png` | 1 | realize.html | bare-ref |
| 20 | `2017/04/media_ui.png` | 1 | scout.html | bare-ref |
| 21 | `2017/04/ongoing_assessment.png` | 1 | scout.html | bare-ref |
| 22 | `2017/04/realize1.png` | 6 | global.css, index.html, realize.html×4 | bare-ref |
| 23 | `2017/04/scout_dashboard.png` | 6 | global.css, index.html, scout.html×4 | bare-ref |
| 24 | `2017/04/screen_1.png` | 1 | k12.html | bare-ref |
| 25 | `2017/04/screen_10.png` | 1 | k12.html | bare-ref |
| 26 | `2017/04/screen_2.png` | 1 | k12.html | bare-ref |
| 27 | `2017/04/screen_3.png` | 1 | k12.html | bare-ref |
| 28 | `2017/04/screen_4.png` | 1 | k12.html | bare-ref |
| 29 | `2017/04/screen_6.png` | 1 | k12.html | bare-ref |
| 30 | `2017/04/screen_7.png` | 1 | k12.html | bare-ref |
| 31 | `2017/04/screen_8.png` | 1 | k12.html | bare-ref |
| 32 | `2017/04/screen_9.png` | 1 | k12.html | bare-ref |
| 33 | `2017/04/screencap.png` | 1 | realize.html | bare-ref |
| 34 | `2017/04/screencapture-pearsonrealize-community-classes-3e08dc24034f49559e1e6647cd24d09f-assignments-1492470064384.png` | 3 | deck/index.html×2, realize.html | bare-ref |
| 35 | `2017/04/screencapture-pearsonrealize-community-data-06f8c022f81b423b9c4f565c92112328-overview-1492469712797.png` | 1 | realize.html | bare-ref |
| 36 | `2017/04/screencapture-pearsonrealize-community-home-1492470016925.png` | 1 | realize.html | bare-ref |
| 37 | `2017/04/to_do_ui.png` | 1 | scout.html | bare-ref |
| 38 | `2018/03/affinity-mapped.jpg` | 1 | sprint.html | bare-ref |
| 39 | `2018/03/failure-areas.jpg` | 1 | sprint.html | bare-ref |
| 40 | `2018/03/first-run.jpg` | 1 | sprint.html | bare-ref |
| 41 | `2018/03/goals-failures-hmws-target.jpg` | 1 | sprint.html | bare-ref |
| 42 | `2018/03/goals.jpg` | 1 | sprint.html | bare-ref |
| 43 | `2018/03/img_1023.jpg` | 1 | sprint.html | bare-ref |
| 44 | `2018/03/img_1036.jpg` | 1 | sprint.html | bare-ref |
| 45 | `2018/03/img_1037.jpg` | 1 | sprint.html | bare-ref |
| 46 | `2018/03/img_1038.jpg` | 1 | sprint.html | bare-ref |
| 47 | `2018/03/img_1040.jpg` | 1 | sprint.html | bare-ref |
| 48 | `2018/03/img_1041.jpg` | 1 | sprint.html | bare-ref |
| 49 | `2018/03/img_1053.jpg` | 1 | sprint.html | bare-ref |
| 50 | `2018/03/img_1062.jpg` | 1 | sprint.html | bare-ref |
| 51 | `2018/03/prortyping.jpg` | 1 | sprint.html | bare-ref |
| 52 | `2018/03/sites.jpg` | 1 | sprint.html | bare-ref |
| 53 | `2018/03/sites2.jpg` | 1 | sprint.html | bare-ref |
| 54 | `2018/03/sprint1.png` | 6 | global.css, index.html, sprint.html×4 | bare-ref |
| 55 | `2018/03/testing.jpg` | 1 | sprint.html | bare-ref |
| 56 | `2018/03/vlogger_1.png` | 1 | vlogger.html | bare-ref |
| 57 | `2018/03/vlogger_2.png` | 1 | vlogger.html | bare-ref |
| 58 | `2018/03/vlogger_3.png` | 1 | vlogger.html | bare-ref |
| 59 | `2018/03/vlogger_4.png` | 7 | global.css, index.html, vlogger.html×5 | bare-ref |
| 60 | `2018/03/what-teacher-currently-does.jpg` | 1 | sprint.html | bare-ref |
| 61 | `2018/03/what-we-want-students-to-feel.jpg` | 1 | sprint.html | bare-ref |
| 62 | `2020/06/group-18-copy-10.png` | 1 | loudmouth.html | bare-ref |
| 63 | `2020/06/group-18.png` | 1 | loudmouth.html | bare-ref |
| 64 | `2020/06/group-27.png` | 1 | loudmouth.html | bare-ref |
| 65 | `2020/06/group-28.png` | 1 | loudmouth.html | bare-ref |
| 66 | `2020/06/powerbi_shot-1.png` | 1 | loudmouth.html | bare-ref |
| 67 | `2020/09/attendance400.5x.png` | 3 | strongmind.html×3 |  |
| 68 | `2020/09/content_feed400.5x.png` | 3 | strongmind.html×3 |  |
| 69 | `2020/09/overview.png` | 3 | strongmind.html×3 |  |
| 70 | `2020/09/overview400.5x.png` | 5 | deck/index.html×2, strongmind.html×3 |  |
| 71 | `2020/10/artboard.png` | 8 | deck/index.html×2, global.css, index.html, loudmouth.html×4 | bare-ref |
| 72 | `2020/10/iteration_board-1.png` | 3 | strongmind.html×3 |  |
| 73 | `2020/10/proto_1.png` | 3 | strongmind.html×3 |  |
| 74 | `2020/10/proto_2.png` | 3 | strongmind.html×3 |  |
| 75 | `2020/10/proto_example.gif` | 3 | strongmind.html×3 |  |
| 76 | `2020/10/proto_gif.gif` | 3 | strongmind.html×3 |  |
| 77 | `2020/10/pxl_20201004_185129612-1.jpg` | 3 | strongmind.html×3 |  |
| 78 | `2020/10/pxl_20201004_185232222-2.jpg` | 3 | strongmind.html×3 |  |
| 79 | `2020/10/splash.png` | 24 | 404.html, drive.html, easybridge.html, global.css×2, hris-sync.html, index.html×3, k12.html, lessen-pro.html, loudmouth.html, realize.html, rivet.html, scout.html, software-tools.html, sprint.html, strongmind.html×5, veho.html, vlogger.html |  |
| 80 | `2020/10/student_1_drk.png` | 3 | strongmind.html×3 |  |
| 81 | `2020/10/student_1_wht.png` | 3 | strongmind.html×3 |  |
| 82 | `2020/10/student_overview_lockout_closed_mob_par.png` | 3 | strongmind.html×3 |  |
| 83 | `2020/10/student_overview_lockout_closed_mob_par4.png` | 3 | strongmind.html×3 |  |
| 84 | `2023/01/comments-1.png` | 4 | deck/index.html, lessen-pro.html×3 |  |
| 85 | `2023/01/filters.png` | 3 | lessen-pro.html×3 |  |
| 86 | `2023/01/login-1.png` | 4 | deck/index.html, lessen-pro.html×3 |  |
| 87 | `2023/01/main-view-2.png` | 4 | deck/index.html, lessen-pro.html×3 |  |
| 88 | `2023/01/overview-1.png` | 3 | lessen-pro.html×3 |  |
| 89 | `2023/01/pro-hero.png` | 24 | 404.html, drive.html, easybridge.html, global.css×2, hris-sync.html, index.html×3, k12.html, lessen-pro.html×5, loudmouth.html, realize.html, rivet.html, scout.html, software-tools.html, sprint.html, strongmind.html, veho.html, vlogger.html |  |
| 90 | `2023/01/scope-items.png` | 4 | deck/index.html, lessen-pro.html×3 |  |
| 91 | `2023/01/start-complete-job.png` | 3 | lessen-pro.html×3 |  |
| 92 | `2023/02/atoms-inputs-selectioncontrol-properties-e28b85-storybook-2023-02-10.png` | 3 | rivet.html×3 |  |
| 93 | `2023/02/card_ideation_pro-1.png` | 4 | deck/index.html, lessen-pro.html×3 |  |
| 94 | `2023/02/main-feature-hero.png` | 6 | deck/index.html×3, lessen-pro.html×3 |  |
| 95 | `2023/02/oliver_owner_operator.png` | 3 | lessen-pro.html×3 |  |
| 96 | `2023/02/pro_wires_2.png` | 4 | deck/index.html, lessen-pro.html×3 |  |
| 97 | `2023/02/rivet-colors.png` | 4 | deck/index.html, rivet.html×3 |  |
| 98 | `2023/02/rivet-design-approach.png` | 3 | rivet.html×3 |  |
| 99 | `2023/02/rivet-logo_rectangle402x.png` | 3 | rivet.html×3 |  |
| 100 | `2023/02/rivet-molecule-accordion.png` | 3 | rivet.html×3 |  |
| 101 | `2023/02/rivet-molecule-form.png` | 3 | rivet.html×3 |  |
| 102 | `2023/02/rivet-standard-button.png` | 4 | deck/index.html, rivet.html×3 |  |
| 103 | `2023/02/rivet-toast.png` | 3 | rivet.html×3 |  |
| 104 | `2023/02/rivet-type.png` | 4 | deck/index.html, rivet.html×3 |  |
| 105 | `2023/02/rivet-welcome.png` | 5 | deck/index.html×2, rivet.html×3 |  |
| 106 | `2023/02/screen_shot_2023-02-04_at_5.17.43_pm.png` | 3 | lessen-pro.html×3 |  |
| 107 | `2023/02/screenshot-2023-02-09-at-4.56.40-pm.png` | 3 | rivet.html×3 |  |
| 108 | `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png` | 26 | 404.html, deck/index.html×3, drive.html, easybridge.html, global.css×2, hris-sync.html, index.html×3, k12.html, lessen-pro.html, loudmouth.html, realize.html, rivet.html×4, scout.html, software-tools.html, sprint.html, strongmind.html, veho.html, vlogger.html |  |
| 109 | `2023/02/selection-control.png` | 3 | rivet.html×3 |  |
| 110 | `2023/02/selection_component_example.gif` | 3 | rivet.html×3 |  |
| 111 | `2023/02/ted_the_tech.png` | 3 | lessen-pro.html×3 |  |
| 112 | `2023/02/thumbnail-preview.png` | 4 | rivet.html×4 |  |
| 113 | `2023/02/vendor_xp_story_map_1-2.png` | 4 | deck/index.html, lessen-pro.html×3 |  |
| 114 | `2023/02/vinny_vendor_owner.png` | 4 | deck/index.html, lessen-pro.html×3 |  |
| 115 | `2023/02/wires_iteration_example_pro.png` | 3 | lessen-pro.html×3 |  |
| 116 | `2024/02/alexis-the-associate-1.png` | 3 | veho.html×3 |  |
| 117 | `2024/02/damaged-1.png` | 3 | veho.html×3 |  |
| 118 | `2024/02/full_decision_tree.png` | 3 | veho.html×3 |  |
| 119 | `2024/02/larry-the-lead-1.png` | 3 | veho.html×3 |  |
| 120 | `2024/02/problem-solve.gif` | 3 | veho.html×3 |  |
| 121 | `2024/02/sam-the-supervisor-1.png` | 3 | veho.html×3 |  |
| 122 | `2024/02/showcase.png` | 3 | veho.html×3 |  |
| 123 | `2024/02/showcase.reg_.png` | 26 | 404.html, deck/index.html×2, drive.html, easybridge.html, global.css×2, hris-sync.html, index.html×3, k12.html, lessen-pro.html, loudmouth.html, realize.html, rivet.html, scout.html, software-tools.html, sprint.html, strongmind.html, veho.html×5, vlogger.html |  |
| 124 | `2024/05/main-feature-hero.png` | 3 | veho.html×3 |  |
| 125 | `2026/02/add-content.png` | 3 | software-tools.html×3 |  |
| 126 | `2026/02/add-owner.png` | 3 | software-tools.html×3 |  |
| 127 | `2026/02/add-tool.png` | 3 | software-tools.html×3 |  |
| 128 | `2026/02/archive-1.png` | 3 | hris-sync.html×3 |  |
| 129 | `2026/02/archive-2.png` | 3 | hris-sync.html×3 |  |
| 130 | `2026/02/archive-3.png` | 3 | hris-sync.html×3 |  |
| 131 | `2026/02/bulk-add-1.png` | 3 | hris-sync.html×3 |  |
| 132 | `2026/02/bulk-add-3.png` | 3 | hris-sync.html×3 |  |
| 133 | `2026/02/chris-sketch.png` | 3 | software-tools.html×3 |  |
| 134 | `2026/02/field-locked-down.png` | 3 | hris-sync.html×3 |  |
| 135 | `2026/02/flowchart-1.png` | 3 | software-tools.html×3 |  |
| 136 | `2026/02/group-tool-1.png` | 3 | software-tools.html×3 |  |
| 137 | `2026/02/hris-hero-lg-1.png` | 3 | hris-sync.html×3 |  |
| 138 | `2026/02/hris-hero-lg.png` | 26 | 404.html, deck/index.html×2, drive.html, easybridge.html, global.css×2, hris-sync.html×5, index.html×3, k12.html, lessen-pro.html, loudmouth.html, realize.html, rivet.html, scout.html, software-tools.html, sprint.html, strongmind.html, veho.html, vlogger.html | bare-ref |
| 139 | `2026/02/hris-main-pages.png` | 3 | hris-sync.html×3 |  |
| 140 | `2026/02/link-record-to-user.png` | 3 | hris-sync.html×3 |  |
| 141 | `2026/02/new-edit-ux.gif` | 3 | software-tools.html×3 |  |
| 142 | `2026/02/p0-components-1.png` | 3 | hris-sync.html×3 |  |
| 143 | `2026/02/phase-0-hero.png` | 3 | hris-sync.html×3 |  |
| 144 | `2026/02/phase-0-rows.png` | 3 | hris-sync.html×3 |  |
| 145 | `2026/02/phase-1-components-3.png` | 3 | hris-sync.html×3 |  |
| 146 | `2026/02/phase-1-manage-users-accordion-open-2.png` | 3 | hris-sync.html×3 |  |
| 147 | `2026/02/phase-1-rows.png` | 6 | hris-sync.html×6 |  |
| 148 | `2026/02/phase-2-components-3.png` | 3 | hris-sync.html×3 |  |
| 149 | `2026/02/phase-2-hero.png` | 3 | hris-sync.html×3 |  |
| 150 | `2026/02/product-info-1.png` | 3 | hris-sync.html×3 |  |
| 151 | `2026/02/profile-tool-1.png` | 3 | software-tools.html×3 |  |
| 152 | `2026/02/relationship_diagram.png` | 3 | software-tools.html×3 |  |
| 153 | `2026/02/rules-filled.png` | 3 | hris-sync.html×3 |  |
| 154 | `2026/02/rules-modal-complex.png` | 3 | hris-sync.html×3 |  |
| 155 | `2026/02/rules-modal-cross-disabled.png` | 3 | hris-sync.html×3 |  |
| 156 | `2026/02/rules.png` | 3 | hris-sync.html×3 |  |
| 157 | `2026/02/software-and-tools-hero-1.png` | 26 | 404.html, deck/index.html×2, drive.html, easybridge.html, global.css×2, hris-sync.html, index.html×3, k12.html, lessen-pro.html, loudmouth.html, realize.html, rivet.html, scout.html, software-tools.html×5, sprint.html, strongmind.html, veho.html, vlogger.html |  |
| 158 | `2026/02/software-and-tools-hero-3.png` | 3 | software-tools.html×3 |  |
| 159 | `2026/02/software-populated-view.png` | 3 | software-tools.html×3 |  |
| 160 | `2026/02/software-sidebar01.png` | 3 | software-tools.html×3 |  |
| 161 | `2026/02/software-sidebar02.png` | 3 | software-tools.html×3 |  |
| 162 | `2026/02/tools-c1-1.png` | 3 | software-tools.html×3 |  |
| 163 | `2026/02/tools-v0.png` | 3 | software-tools.html×3 |  |
| 164 | `2026/02/tools-v2-1.png` | 3 | software-tools.html×3 |  |
| 165 | `2026/02/tools-v2.png` | 3 | software-tools.html×3 |  |