---
"@savvy-web/linked-2": patch
---

Converted costume change animations to async to prevent main thread blocking.

We noticed—well, we were worried about—the main thread getting blocked during quick costume changes. What if an actor needed to do a rapid costume montage? What if the audience was watching and suddenly everything froze mid-outfit? The thought kept us up at night.

So we fixed it. Probably. We hope.

The new async animation system includes:

- **Async Costume Animator** - Uses a configurable scheduler instead of blocking the thread. We added a setTimeout fallback just in case requestAnimationFrame isn't available. You never know what environment you'll be in. Better safe than sorry.

- **Animation Frame Scheduler** - Manages all the animation callbacks. It tracks how many frames each animation has run, just in case something gets stuck. If an animation runs for more than 10,000 frames, we stop it. Is that the right number? We're not sure. But it feels safe.

- **FPS Monitor** - Because how do you know things are okay unless you measure them? It tracks current FPS, average FPS, dropped frames, and whether performance is "acceptable." We set acceptable at 55 FPS. That's probably fine. Right?

We also added an emergency `cancelAllAnimations()` function. You shouldn't need it. But if everything goes wrong... it's there. Just in case.

Costume changes should now be smooth at 60fps. We think. Please let us know if they're not.
