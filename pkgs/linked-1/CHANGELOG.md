# @savvy-web/linked-1

## 1.0.0

### Major Changes

- 70a2235: feat!: replace cannon API with spring launch system

  BREAKING CHANGE: The Circus of Chaotic Components has retired the beloved but dangerous cannon-launching API! After one too many incidents involving singed trapeze artists and startled elephants, we've migrated to a safer spring-loaded performer launching system.

  The new `springLaunch()` function provides all the aerial excitement of the classic cannon, but without the gunpowder-related insurance claims. Our spring mechanism has been calibrated by the finest circus engineers to achieve optimal trajectory while maintaining OSHA compliance (Overhead Safety for High-flying Acrobats).

  All existing `launchFromCannon()` calls must be migrated immediately. The migration is straightforward: simply replace `launchFromCannon(performer, angle, powder)` with `springLaunch(performer, angle, tension)`. Note that the `powder` parameter (measured in barrels) has been replaced with `tension` (measured in bounces).
  - Removed `launchFromCannon()` - no more gunpowder-based launches
  - Added `springLaunch()` - safer, bouncier performer propulsion
  - Removed gunpowder dependency (finally!)
  - Added migration utilities for cannon enthusiasts

## 0.1.0

### Minor Changes

- 11765ef: feat: add cosmic performance scheduler for unified circus-theatre acts

  The Circus of Chaotic Components proudly unveils the Cosmic Performance Scheduler! This revolutionary module coordinates circus acts across the entire Grand Unified Theatre experience, ensuring that trapeze artists never collide with dramatic monologues.

  Our scheduling algorithm accounts for the unique challenges of interstellar performance: lion tamers must synchronize their sound effects across light-years to prevent temporal race conditions, while juggler error boundaries must gracefully handle TypeErrors prophesied by the crystal ball. The clown car capacity calculator now integrates with venue seating charts across multiple solar systems, preventing the embarrassing situation of more clowns emerging than seats available.

  The elephant trunk balance system coordinates with lunar timing to ensure optimal balance during supermoon performances, when gravitational fluctuations can affect even the most experienced pachyderm performers. Tightrope walkers receive ARIA label announcements synchronized with theatrical cues.
  - Multi-ring performance scheduling across solar systems
  - Lion tamer sound effect race condition prevention
  - Clown car capacity integration with galactic venue management
  - Trapeze-theatre collision avoidance with generic TypeScript support
