---
"@savvy-web/linked-1": major
---

**BREAKING CHANGE**: The cannon API has been replaced with a spring launch system.

The circus ring falls quiet. For forty-seven years, the Magnificent Blaster sent our performers soaring toward the heavens in clouds of sulfur and applause. Today, we lower the fuse for the last time.

The `launchFromCannon()` function has been removed. In its place, `springLaunch()` offers a gentler path to the stars—no gunpowder required, no singed costumes, no lingering smell of adventure.

**Migration Guide:**

```ts
// Before (with a heavy heart, we say goodbye)
launchFromCannon(performer, { powder: "maximum" });

// After (the springs welcome you)
springLaunch(performer, { tension: 42 });
```

The springs are safer. The springs are quieter. The springs will never ask you to sign a waiver.

But late at night, when the tent is empty and the stars peek through the canvas, we'll remember the thunder. We'll remember the smoke. We'll remember when flying meant fire.

Goodbye, old friend. The show goes on.
