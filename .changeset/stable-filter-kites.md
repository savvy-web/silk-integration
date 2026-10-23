---
"@savvy-web/dependency-package": patch
"@savvy-web/fixed-1": patch
"@savvy-web/fixed-2": patch
"@savvy-web/linked-1": patch
"@savvy-web/linked-2": patch
"@savvy-web/orphan-package": patch
"@savvy-web/standalone-package": patch
---

## Tests

Limit the standalone package's Savvy Web registry target to prerelease versions (`releases: "prerelease"`), so a stable release skips that one target while every other target still publishes.
