# Archived dev scripts

These are one-off local scripts used during earlier content migration/build
passes (Figma asset processing, CSS rewrites, per-product page generation).

They are **not** referenced by `package.json`, any build step, CI/deploy
workflow, or application code — confirmed by a full repository search before
archiving. `append_prodcard.js` even hardcodes a path to a different local
folder (`c:/Users/Acer/Desktop/antigravity/...`) than this project, showing
it predates the current repo layout and would not run as-is.

Kept here for reference only. Safe to delete entirely if never needed again.
