# Dispatch brief — finish the dayne.design WordPress image migration

**Repo:** `github.com/dayne-train/daynedesign` (static site, GitHub Pages, custom domain `dayne.design`).

## TL;DR
- The site's HTML is already off WordPress, but **images** still load from WordPress's Jetpack/Photon CDN: `https://i0.wp.com/daynepetera.wordpress.com/wp-content/uploads/...`
- Goal: rehost all images **in-repo** at `assets/images/wp/YYYY/MM/...` and rewrite every reference to a local path, so the site has zero WordPress dependency.
- **WordPress Premium was cancelled on 2026-06-23.** That broke Photon's ability to fetch images from the origin (error: *"remote data could not be fetched"*). Images that were warm in Photon's cache still download; cache-misses now 403.
- Status so far: **62 / 165 images recovered** to `assets/images/wp/` (local working tree). **103 still missing.**

## The cause and the fastest fix
Photon is a proxy. On a cache miss it fetches the original from the WordPress origin. Cancelling the plan downgraded the site, so origin fetches fail. Therefore:
1. **BEST: reactivate the WordPress plan within the refund/grace window, then re-run the scrape** (recipe below) to pull clean full-resolution originals for all 165 at once. Then cancel again. Time-sensitive: Photon cache for the recovered 62 will also expire.
2. **OR export from the Media Library** at `daynepetera.wpcomstaging.com/wp-admin/` (authenticated, bypasses Photon). Match filenames to the basenames in the missing list below; preserve the `YYYY/MM` folder. Watch for WP `-e<timestamp>` edited-image variants.
3. **OR re-export from source design files** (Figma/Sketch) for any originals WordPress no longer has. The newer case studies (Rivet 2023, HRIS Sync / Software & Tools 2026, Lessen) are most likely still in Figma.

### Scrape recipe (works while the plan is active)
For each `YYYY/MM/file` key, fetch with a width query so Photon serves the full-res original (it never upscales):
```bash
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
# old origin (pre-cancel): daynepetera.wordpress.com  |  current origin: daynepetera.wpcomstaging.com
curl -s -L -A "$UA" -e "https://dayne.design/" \
  "https://i0.wp.com/daynepetera.wordpress.com/wp-content/uploads/<KEY>?w=9999&ssl=1" -o "assets/images/wp/<KEY>"
```
Validate each download is a real image (`file --mime-type` starts with `image/`); a 65-byte `text/html` body is a 403 failure, not an image.

## Remaining implementation work (mechanical, automatable once images are local)
1. **Rewrite all image references** in 17 HTML files + `global.css` (+ `deck/index.html`):
   - `https://i0.wp.com/daynepetera.wordpress.com/wp-content/uploads/` -> `/assets/images/wp/`
   - strip the trailing `?w=...&ssl=1` / `?fit=...` query (local files are full-res; sizes come from CSS)
   - decode `&amp;` if present while matching
2. **Fix the lightbox JS.** `case-study.js` (~line 86) plus inline copies in 8 pages (`drive`, `easybridge`, `k12`, `loudmouth`, `scout`, `realize`, `sprint`, `vlogger`) run:
   `const fullSrc = img.src.replace(/^https:\/\/i\d+\.wp\.com\//, 'https://').split('?')[0];`
   With local images this must become `const fullSrc = img.src;` or every lightbox click 404s.
3. **Update `CLAUDE.md` -> "Image hosting"** — it currently says to KEEP using the Jetpack CDN and *"do not change them."* Flip the convention to local-only.
4. **Verify:** `grep -rn 'i0.wp.com' .` returns nothing in HTML/CSS/JS; every `/assets/images/wp/...` path resolves to a file on disk.
> Note: email is unaffected. `dayne.design` MX / Google Workspace runs on WordPress.com DNS and is independent of image hosting.

## Still-missing images (103) — grouped by page
These currently 403 on the live site too (broken in production). Recover via options 1-3 above.

### `deck/index.html` — 7 missing
- `2017/04/screencapture-pearsonrealize-community-classes-3e08dc24034f49559e1e6647cd24d09f-assignments-1492470064384.png`
- `2020/10/artboard.png`
- `2023/01/login-1.png`
- `2023/02/main-feature-hero.png`
- `2023/02/rivet-standard-button.png`
- `2023/02/rivet-type.png`
- `2023/02/vinny_vendor_owner.png`

### `drive.html` — 7 missing
- `2017/01/drive_mockup-e1491240476632.png`
- `2017/01/ia.jpg`
- `2017/01/sketching.jpg`
- `2017/01/wire11-e1490729895261.png`
- `2017/01/wire21-e1490729919985.png`
- `2017/01/wire31-e1490730041954.png`
- `2017/01/wire41-e1490729984689.png`

### `easybridge.html` — 2 missing
- `2017/04/eb_main_01.jpg`
- `2017/04/eb_main_02.jpg`

### `global.css` — 4 missing
- `2017/04/realize1.png`
- `2018/03/sprint1.png`
- `2018/03/vlogger_4.png`
- `2020/10/artboard.png`

### `index.html` — 4 missing
- `2017/04/realize1.png`
- `2018/03/sprint1.png`
- `2018/03/vlogger_4.png`
- `2020/10/artboard.png`

### `k12.html` — 8 missing
- `2017/04/screen_1.png`
- `2017/04/screen_2.png`
- `2017/04/screen_3.png`
- `2017/04/screen_4.png`
- `2017/04/screen_6.png`
- `2017/04/screen_7.png`
- `2017/04/screen_8.png`
- `2017/04/screen_9.png`

### `lessen-pro.html` — 6 missing
- `2023/01/filters.png`
- `2023/01/login-1.png`
- `2023/01/start-complete-job.png`
- `2023/02/main-feature-hero.png`
- `2023/02/oliver_owner_operator.png`
- `2023/02/vinny_vendor_owner.png`

### `loudmouth.html` — 6 missing
- `2020/06/group-18-copy-10.png`
- `2020/06/group-18.png`
- `2020/06/group-27.png`
- `2020/06/group-28.png`
- `2020/06/powerbi_shot-1.png`
- `2020/10/artboard.png`

### `realize.html` — 11 missing
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

### `rivet.html` — 6 missing
- `2023/02/rivet-design-approach.png`
- `2023/02/rivet-molecule-accordion.png`
- `2023/02/rivet-molecule-form.png`
- `2023/02/rivet-standard-button.png`
- `2023/02/rivet-toast.png`
- `2023/02/rivet-type.png`

### `scout.html` — 4 missing
- `2017/04/assessment_checklist.png`
- `2017/04/media_ui.png`
- `2017/04/ongoing_assessment.png`
- `2017/04/to_do_ui.png`

### `software-tools.html` — 15 missing
- `2026/02/add-content.png`
- `2026/02/add-owner.png`
- `2026/02/add-tool.png`
- `2026/02/chris-sketch.png`
- `2026/02/flowchart-1.png`
- `2026/02/group-tool-1.png`
- `2026/02/new-edit-ux.gif`
- `2026/02/profile-tool-1.png`
- `2026/02/software-and-tools-hero-3.png`
- `2026/02/software-populated-view.png`
- `2026/02/software-sidebar01.png`
- `2026/02/software-sidebar02.png`
- `2026/02/tools-c1-1.png`
- `2026/02/tools-v0.png`
- `2026/02/tools-v2.png`

### `sprint.html` — 20 missing
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

### `strongmind.html` — 12 missing
- `2020/09/attendance400.5x.png`
- `2020/09/content_feed400.5x.png`
- `2020/09/overview.png`
- `2020/10/proto_2.png`
- `2020/10/proto_example.gif`
- `2020/10/proto_gif.gif`
- `2020/10/pxl_20201004_185129612-1.jpg`
- `2020/10/pxl_20201004_185232222-2.jpg`
- `2020/10/student_1_drk.png`
- `2020/10/student_1_wht.png`
- `2020/10/student_overview_lockout_closed_mob_par.png`
- `2020/10/student_overview_lockout_closed_mob_par4.png`

### `veho.html` — 3 missing
- `2024/02/full_decision_tree.png`
- `2024/02/problem-solve.gif`
- `2024/05/main-feature-hero.png`

### `vlogger.html` — 3 missing
- `2018/03/vlogger_1.png`
- `2018/03/vlogger_3.png`
- `2018/03/vlogger_4.png`

## Already recovered (62) — present in `assets/images/wp/`
Commit these so they are safe regardless of WordPress state:

- `2017/01/dive_mockup2.png`
- `2017/04/eb_front.png`
- `2017/04/k12_featured1.png`
- `2017/04/scout_dashboard.png`
- `2017/04/screen_10.png`
- `2018/03/vlogger_2.png`
- `2020/09/overview400.5x.png`
- `2020/10/iteration_board-1.png`
- `2020/10/proto_1.png`
- `2020/10/splash.png`
- `2023/01/comments-1.png`
- `2023/01/main-view-2.png`
- `2023/01/overview-1.png`
- `2023/01/pro-hero.png`
- `2023/01/scope-items.png`
- `2023/02/atoms-inputs-selectioncontrol-properties-e28b85-storybook-2023-02-10.png`
- `2023/02/card_ideation_pro-1.png`
- `2023/02/pro_wires_2.png`
- `2023/02/rivet-colors.png`
- `2023/02/rivet-logo_rectangle402x.png`
- `2023/02/rivet-welcome.png`
- `2023/02/screen_shot_2023-02-04_at_5.17.43_pm.png`
- `2023/02/screenshot-2023-02-09-at-4.56.40-pm.png`
- `2023/02/screenshot-2023-02-09-at-6.29.15-pm.png`
- `2023/02/selection-control.png`
- `2023/02/selection_component_example.gif`
- `2023/02/ted_the_tech.png`
- `2023/02/thumbnail-preview.png`
- `2023/02/vendor_xp_story_map_1-2.png`
- `2023/02/wires_iteration_example_pro.png`
- `2024/02/alexis-the-associate-1.png`
- `2024/02/damaged-1.png`
- `2024/02/larry-the-lead-1.png`
- `2024/02/sam-the-supervisor-1.png`
- `2024/02/showcase.png`
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
- `2026/02/relationship_diagram.png`
- `2026/02/rules-filled.png`
- `2026/02/rules-modal-complex.png`
- `2026/02/rules-modal-cross-disabled.png`
- `2026/02/rules.png`
- `2026/02/software-and-tools-hero-1.png`
- `2026/02/tools-v2-1.png`