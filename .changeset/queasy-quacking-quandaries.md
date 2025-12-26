---
"@savvy-web/dependency-package": minor
---

We've added async/await support to the quacking methods. The ducks unionized and demanded it, so here we are.

**New Features:**
- `quackAsync()` - Because apparently waiting for quacks synchronously was too simple
- Migration helpers for transitioning existing code (good luck with that)
- Batch quacking utilities that will probably race in production

**Backward Compatibility:**
The original `quack()` method still exists for now. We kept it synchronous to avoid breaking everything immediately, though someone will inevitably find a way to break anyway. The new `quackAsync()` method is there for when you need your quacks to await properly.

**Known Issues (that we're sure about):**
- Race conditions in batch operations (probably)
- Timing issues if you mix sync and async quacks (almost certainly)
- Someone's build pipeline will break despite our best efforts (guaranteed)

We tested this as thoroughly as we could, but let's be honest—there's always some edge case lurking in production that we didn't think of. Report bugs when (not if) you find them.

**Migration Path:**
If you're brave enough to migrate existing synchronous quacking code to async, use the `migrateQuackCaller()` helper. Read the docs carefully. It probably won't handle your specific use case, but it's a start.

Good luck out there. You'll need it.
