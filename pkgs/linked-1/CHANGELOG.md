# @savvy-web/linked-1

## 2.0.0

### Major Changes

- 49de6e3: # The Great Spring Revolution

  **BREAKING CHANGE**: The era of cannon-powered circus launches has ended. Welcome to the FUTURE.

  ## What's Changed

  The `launchFromCannon()` API has been completely removed and replaced with the revolutionary `springLaunch()` system. This isn't just an upgrade - it's a complete TRANSFORMATION of how performers take flight.

  ## Why Springs?
  - **Precision**: Every launch calibrated to perfection
  - **Safety**: No more singed eyebrows or gunpowder mishaps
  - **Repeatability**: The same spectacular arc, every single time
  - **OSHA Compliance**: Finally achieved after decades of "creative interpretation"

  ## Migration Guide

  ```typescript
  // Before (DEPRECATED - will throw!)
  launchFromCannon({ gunpowderAmount: 100, barrelAngle: 45, fuseLength: 3 });

  // After (THE FUTURE!)
  springLaunch({ springTension: 5000, launchAngle: 45, releaseDelay: 300 });
  ```

  Use the new `CannonToSpringMigrator` to automatically convert your legacy configurations. Your performers will thank you.

  ## New Features
  - `SpringCalibrationEngine` - Precision calibration for MAXIMUM performance
  - `SpringSafetyValidator` - Rigorous safety validation with certification levels
  - `CannonToSpringMigrator` - Seamless migration from legacy systems

  The circus has never been safer. The launches have never been more SPECTACULAR.

## 1.2.0

### Minor Changes

- 504972f: # The Grand Unified Cosmic Circus Theatre

  Witness the most AMBITIOUS integration in the multiverse! Six packages unite in spectacular harmony:

  **Interstellar Snack Delivery** now coordinates galaxy-wide intermissions with the new Grand Spectacle Coordinator, ensuring perfectly-timed refreshments during dramatic pauses across all solar systems.

  **Sentient Rubber Duck Debugging Institute** introduces the Universal Duck Conductor, orchestrating synchronized quacking across all cosmic venues for maximum debugging efficiency.

  **Mystical Crystal Ball Prophecies** broadcasts predictions to every corner of the theatre with the Unified Prophecy Broadcaster, timing revelations for maximum dramatic impact.

  **Moonlight-Powered Compilation** synchronizes lunar energy distribution via Celestial Compilation Sync, powering spectacular effects across all performance venues.

  **Circus of Chaotic Components** brings the house down with the Circus Grand Finale, coordinating multi-ring spectacles and spring-loaded confetti (no gunpowder, we promise!).

  **Theatre of Theatrical Types** manages the ultimate curtain call with the Theatre Finale Curtain, orchestrating cosmic standing ovations across the multiverse.

  _The show must go on—and it's never been this ambitious!_

## 1.1.0

### Patch Changes

- 3600de4: fix: account for elephant trunk weight in balance calculations

  Oh no, we discovered something truly terrifying! Our elephant balance scale component was completely ignoring trunk weight distribution this whole time. Large elephants appeared wobbly and off-balance even when they were standing perfectly still - and we couldn't figure out why!

  After many sleepless nights of anxious code review (what if an elephant actually fell?!), we finally found the culprit: the trunk. An elephant's trunk can account for up to 140kg of weight, and when extended or raised, it dramatically shifts the center of gravity. We were so focused on body mass that we forgot about this crucial appendage!
  - Adds trunk weight factor to all balance calculations (finally!)
  - Considers trunk position state (raised, lowered, extended, curled)
  - Includes trunk length as a variable in the center-of-gravity formula
  - Added extensive safety margins because we really, really don't want elephants falling over

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
