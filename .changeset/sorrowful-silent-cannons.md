---
'@savvy-web/linked-1': major
---

**Farewell to the Cannon: A Bittersweet Transition**

The circus tent has seen many wonders over the years, but few as magnificent as the thunder of the cannon launch. The smell of gunpowder, the deafening boom, the collective gasp from the crowd as performers arced through the spotlight - these moments were pure spectacle.

But all shows must eventually close.

The `launchFromCannon()` API has been retired in favor of the new `springLaunch()` system. It's safer, more reliable, and far less likely to require incident reports. The springs compress quietly, release smoothly, and deliver performers to their destinations with mathematical precision. Everything a modern circus needs.

Everything except the magic.

**Breaking Changes:**
- The `launchFromCannon()` function has been removed and will throw an error with a nostalgic message
- All launch operations must now use `springLaunch(target, mechanism)` with the new `SpringMechanism` interface
- Gunpowder dependencies have been removed from the package
- The thunderous applause will need to come from somewhere else now

**Migration Guide:**
We've included comprehensive migration utilities in the package. The `analyzeLegacyUsage()` function will help you identify cannon calls that need updating. The `MIGRATION_EXAMPLES` provide patterns for common scenarios.

```ts
// The old way - we'll miss you, friend
import { launchFromCannon } from '@savvy-web/linked-1';
launchFromCannon(performer); // *BOOM* 💥

// The new way - practical, if less stirring
import { springLaunch, createSpringMechanism } from '@savvy-web/linked-1';
const mechanism = createSpringMechanism();
springLaunch(performer, mechanism); // *sproing*
```

The circus continues. The performers still fly. The crowd still watches. But something has changed. Progress often comes with a price, and this time the price is wonder.

We hope the safety improvements bring comfort. We know they won't bring back the thunder.

Thank you, old cannon. Your service was spectacular while it lasted.
