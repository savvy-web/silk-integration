---
"@savvy-web/linked-1": patch
---

Resolves a nerve-wracking race condition in the lion tamer's whip crack sound effects. Previously, when multiple lions were being tamed simultaneously, the crack sounds could fire out of sync with animations—sometimes echoing through the big top BEFORE the whip even moved. The lions found this deeply unsettling, and frankly, so did we.

The new `LionTamerSoundMutex` ensures proper synchronization between whip animations and their accompanying audio. No more premature cracks. No more confused felines. Sleep soundly, circus-goers—the timing is finally under control.
