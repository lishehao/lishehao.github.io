# Gallery homepage migration — 2026-09-20

User requested replacement of the GitHub Pages resume-site homepage with the
current Pocket Planet prototype, removal of hover explanations and the blue
personal-interest section, and one cohesive color/gallery per project.

## Content

- Public: Tiny Stories / RPG Demo; Auto Load-Off Test.
- Keep hidden: GitHub Issues to DingTalk, Email to DingTalk To-Dos, MultiTimer.
  Their source frontmatter explicitly says draft / hideFromProjects.
- Expanded homepage summaries come from the existing public case studies.
  No new impact numbers or employment claims were added.
- Checked `static/resume/index.html`: its two project narratives remain
  consistent with the migrated qualitative summaries; no resume rewrite needed.
- Existing `/projects/`, `/zh/projects/`, `/about/`, `/resume/` and verification
  files remain untouched. English and Chinese home entrypoints use the new app.

## Motion

Each project has a single opaque room color, framed film, workflow labels and
expandable technical notes. During the final portion of its scroll hold, the
exhibit recedes by 3.5% / 28px; the next opaque room rises naturally with scrolling.
No scroll interception, extra animation engine or idle animation loop. Mobile,
short windows and reduced-motion use normal flowing sections. Films only play
after user interaction and pause when their room leaves the viewport.

## Evidence and limits

- Production build and 11 Node tests passed (including bilingual SSR markup,
  removed-content checks, asset existence, clock, exact picking, mask lifecycle).
- npm audit after pruning unused dependencies and patching build tools: zero
  reported vulnerabilities at this release.
- Browser control was denied because the admin-policy check was unavailable.
  No bypass attempted. Actual IAB rendering, mouse interaction, mobile gestures,
  flicker and Inspector performance are NOT accepted by these tests.
- Pre-migration commit: `401a766a634b974b80dc9a4d2ddc6b9a10a53189`.
  The migration is one reversible Git commit; preserve later work when reverting.
