---
"@savvy-web/linked-1": major
---

feat!: replace cannon API with spring launch system

BREAKING CHANGE: The Circus of Chaotic Components has retired the beloved but dangerous cannon-launching API! After one too many incidents involving singed trapeze artists and startled elephants, we've migrated to a safer spring-loaded performer launching system.

The new `springLaunch()` function provides all the aerial excitement of the classic cannon, but without the gunpowder-related insurance claims. Our spring mechanism has been calibrated by the finest circus engineers to achieve optimal trajectory while maintaining OSHA compliance (Overhead Safety for High-flying Acrobats).

All existing `launchFromCannon()` calls must be migrated immediately. The migration is straightforward: simply replace `launchFromCannon(performer, angle, powder)` with `springLaunch(performer, angle, tension)`. Note that the `powder` parameter (measured in barrels) has been replaced with `tension` (measured in bounces).

- Removed `launchFromCannon()` - no more gunpowder-based launches
- Added `springLaunch()` - safer, bouncier performer propulsion
- Removed gunpowder dependency (finally!)
- Added migration utilities for cannon enthusiasts
