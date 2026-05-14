# @savvy-web/linked-1

## 5.0.2

### Patch Changes

* 9dd5f39: Resolves a nerve-wracking race condition in the lion tamer's whip crack sound effects. Previously, when multiple lions were being tamed simultaneously, the crack sounds could fire out of sync with animations—sometimes echoing through the big top BEFORE the whip even moved. The lions found this deeply unsettling, and frankly, so did we.

  The new `LionTamerSoundMutex` ensures proper synchronization between whip animations and their accompanying audio. No more premature cracks. No more confused felines. Sleep soundly, circus-goers—the timing is finally under control.

## 5.0.0

### Major Changes

* 5b998c3: **Farewell to the Cannon: A Bittersweet Transition**

  The circus tent has seen many wonders over the years, but few as magnificent as the thunder of the cannon launch. The smell of gunpowder, the deafening boom, the collective gasp from the crowd as performers arced through the spotlight - these moments were pure spectacle.

  But all shows must eventually close.

  The `launchFromCannon()` API has been retired in favor of the new `springLaunch()` system. It's safer, more reliable, and far less likely to require incident reports. The springs compress quietly, release smoothly, and deliver performers to their destinations with mathematical precision. Everything a modern circus needs.

  Everything except the magic.

  **Breaking Changes:**

  * The `launchFromCannon()` function has been removed and will throw an error with a nostalgic message
  * All launch operations must now use `springLaunch(target, mechanism)` with the new `SpringMechanism` interface
  * Gunpowder dependencies have been removed from the package
  * The thunderous applause will need to come from somewhere else now

  **Migration Guide:**
  We've included comprehensive migration utilities in the package. The `analyzeLegacyUsage()` function will help you identify cannon calls that need updating. The `MIGRATION_EXAMPLES` provide patterns for common scenarios.

  ```ts
  // The old way - we'll miss you, friend
  import { launchFromCannon } from "@savvy-web/linked-1";
  launchFromCannon(performer); // *BOOM* 💥

  // The new way - practical, if less stirring
  import { springLaunch, createSpringMechanism } from "@savvy-web/linked-1";
  const mechanism = createSpringMechanism();
  springLaunch(performer, mechanism); // *sproing*
  ```

  The circus continues. The performers still fly. The crowd still watches. But something has changed. Progress often comes with a price, and this time the price is wonder.

  We hope the safety improvements bring comfort. We know they won't bring back the thunder.

  Thank you, old cannon. Your service was spectacular while it lasted.

### Minor Changes

* 277bfbe: **Tightrope Walker Accessibility: So Many Things to Consider!**

  Oh wow, where do we even start? The circus needs to be accessible to everyone, and that means... *deep breath*... we need ARIA labels, and screen reader announcements, and keyboard navigation, and testing with NVDA, JAWS, VoiceOver, and what if we missed something? What about the balance announcements? The safety net proximity warnings? The critical alerts?

  We've added comprehensive accessibility features to the tightrope walker component, but honestly, accessibility is such a big topic and there's always more we could do. Are the labels descriptive enough? Will screen readers handle the live updates properly? What about users with both visual and auditory impairments? Should we add haptic feedback? What about-

  *ahem* Sorry. Let me try to focus:

  **What we implemented (and hope it's enough):**

  * ARIA label generation for balance status and net proximity
  * Screen reader announcement system for real-time updates
  * Comprehensive assistive technology testing framework
  * WCAG 2.1 AA compliance validation utilities
  * Keyboard navigation testing support

  The tightrope walker now announces its balance status, warns about proximity to the safety net below, and provides critical alerts when things get dicey. We've tested with multiple assistive technologies (okay, we've set up the *framework* for testing with multiple assistive technologies, there's always more testing to do).

  Circus managers who use screen readers can now keep track of their performers' precarious positions and react accordingly. Is it perfect? Probably not. Is it better than before? Definitely. Are there edge cases we haven't considered? Almost certainly. Should we document all the possible failure modes? Maybe? Is this feature ready? We think so? Help?

## 4.0.0

### Major Changes

* 4b4ca9e: **BREAKING CHANGE**: The cannon API has been replaced with a spring launch system.

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

## 3.0.0

### Major Changes

* 77b3f31: **BREAKING CHANGE**: The era of explosive circus launches has come to a triumphant close!

  We've bid farewell to the legendary (and occasionally catastrophic) `launchFromCannon()` API, replacing it with the revolutionary spring-based launch system. No more singed costumes, no more unpredictable trajectories, no more "where did the clown land?" emergency meetings.

  The new `springLaunch()` function offers:

  * Precise, repeatable trajectories calculated with actual physics
  * Adjustable tension, dampening, and compression settings
  * Zero gunpowder-related insurance claims

  **Migration required**: All existing cannon launch calls must transition to the spring system. A migration guide is now available to help your circus embrace this safer, more spectacular future.

  The show must go on—just with fewer explosions.

## 2.1.0

### Minor Changes

* f6bf318: The tightrope has learned to whisper.

  For circus managers who experience our chaotic performances through screen readers, the high wire now offers a gentle narration. Each wobble is announced with the softness of a summer breeze; each recovery celebrated like morning dew settling on grass.

  **What's New:**

  * **ARIA labels** that paint the performer's journey in words—balance status, net proximity, and graceful dismounts all described with care
  * **Screen reader announcements** that flow at a peaceful pace, never jarring, always informative
  * **Testing utilities** to ensure harmony across JAWS, NVDA, VoiceOver, TalkBack, and more

  Like adding subtitles to a silent film of acrobatic wonder, this update ensures no circus manager misses the magic of the tightrope—regardless of how they perceive the show.

## 2.0.0

### Major Changes

* 49de6e3: # The Great Spring Revolution

  **BREAKING CHANGE**: The era of cannon-powered circus launches has ended. Welcome to the FUTURE.

  ## What's Changed

  The `launchFromCannon()` API has been completely removed and replaced with the revolutionary `springLaunch()` system. This isn't just an upgrade - it's a complete TRANSFORMATION of how performers take flight.

  ## Why Springs?

  * **Precision**: Every launch calibrated to perfection
  * **Safety**: No more singed eyebrows or gunpowder mishaps
  * **Repeatability**: The same spectacular arc, every single time
  * **OSHA Compliance**: Finally achieved after decades of "creative interpretation"

  ## Migration Guide

  ```typescript
  // Before (DEPRECATED - will throw!)
  launchFromCannon({ gunpowderAmount: 100, barrelAngle: 45, fuseLength: 3 });

  // After (THE FUTURE!)
  springLaunch({ springTension: 5000, launchAngle: 45, releaseDelay: 300 });
  ```

  Use the new `CannonToSpringMigrator` to automatically convert your legacy configurations. Your performers will thank you.

  ## New Features

  * `SpringCalibrationEngine` - Precision calibration for MAXIMUM performance
  * `SpringSafetyValidator` - Rigorous safety validation with certification levels
  * `CannonToSpringMigrator` - Seamless migration from legacy systems

  The circus has never been safer. The launches have never been more SPECTACULAR.

## 1.2.0

### Minor Changes

* 504972f: # The Grand Unified Cosmic Circus Theatre

  Witness the most AMBITIOUS integration in the multiverse! Six packages unite in spectacular harmony:

  **Interstellar Snack Delivery** now coordinates galaxy-wide intermissions with the new Grand Spectacle Coordinator, ensuring perfectly-timed refreshments during dramatic pauses across all solar systems.

  **Sentient Rubber Duck Debugging Institute** introduces the Universal Duck Conductor, orchestrating synchronized quacking across all cosmic venues for maximum debugging efficiency.

  **Mystical Crystal Ball Prophecies** broadcasts predictions to every corner of the theatre with the Unified Prophecy Broadcaster, timing revelations for maximum dramatic impact.

  **Moonlight-Powered Compilation** synchronizes lunar energy distribution via Celestial Compilation Sync, powering spectacular effects across all performance venues.

  **Circus of Chaotic Components** brings the house down with the Circus Grand Finale, coordinating multi-ring spectacles and spring-loaded confetti (no gunpowder, we promise!).

  **Theatre of Theatrical Types** manages the ultimate curtain call with the Theatre Finale Curtain, orchestrating cosmic standing ovations across the multiverse.

  *The show must go on—and it's never been this ambitious!*

## 1.1.0

### Patch Changes

* 3600de4: fix: account for elephant trunk weight in balance calculations

  Oh no, we discovered something truly terrifying! Our elephant balance scale component was completely ignoring trunk weight distribution this whole time. Large elephants appeared wobbly and off-balance even when they were standing perfectly still - and we couldn't figure out why!

  After many sleepless nights of anxious code review (what if an elephant actually fell?!), we finally found the culprit: the trunk. An elephant's trunk can account for up to 140kg of weight, and when extended or raised, it dramatically shifts the center of gravity. We were so focused on body mass that we forgot about this crucial appendage!

  * Adds trunk weight factor to all balance calculations (finally!)
  * Considers trunk position state (raised, lowered, extended, curled)
  * Includes trunk length as a variable in the center-of-gravity formula
  * Added extensive safety margins because we really, really don't want elephants falling over

## 1.0.0

### Major Changes

* 70a2235: feat!: replace cannon API with spring launch system

  BREAKING CHANGE: The Circus of Chaotic Components has retired the beloved but dangerous cannon-launching API! After one too many incidents involving singed trapeze artists and startled elephants, we've migrated to a safer spring-loaded performer launching system.

  The new `springLaunch()` function provides all the aerial excitement of the classic cannon, but without the gunpowder-related insurance claims. Our spring mechanism has been calibrated by the finest circus engineers to achieve optimal trajectory while maintaining OSHA compliance (Overhead Safety for High-flying Acrobats).

  All existing `launchFromCannon()` calls must be migrated immediately. The migration is straightforward: simply replace `launchFromCannon(performer, angle, powder)` with `springLaunch(performer, angle, tension)`. Note that the `powder` parameter (measured in barrels) has been replaced with `tension` (measured in bounces).

  * Removed `launchFromCannon()` - no more gunpowder-based launches
  * Added `springLaunch()` - safer, bouncier performer propulsion
  * Removed gunpowder dependency (finally!)
  * Added migration utilities for cannon enthusiasts

## 0.1.0

### Minor Changes

* 11765ef: feat: add cosmic performance scheduler for unified circus-theatre acts

  The Circus of Chaotic Components proudly unveils the Cosmic Performance Scheduler! This revolutionary module coordinates circus acts across the entire Grand Unified Theatre experience, ensuring that trapeze artists never collide with dramatic monologues.

  Our scheduling algorithm accounts for the unique challenges of interstellar performance: lion tamers must synchronize their sound effects across light-years to prevent temporal race conditions, while juggler error boundaries must gracefully handle TypeErrors prophesied by the crystal ball. The clown car capacity calculator now integrates with venue seating charts across multiple solar systems, preventing the embarrassing situation of more clowns emerging than seats available.

  The elephant trunk balance system coordinates with lunar timing to ensure optimal balance during supermoon performances, when gravitational fluctuations can affect even the most experienced pachyderm performers. Tightrope walkers receive ARIA label announcements synchronized with theatrical cues.

  * Multi-ring performance scheduling across solar systems
  * Lion tamer sound effect race condition prevention
  * Clown car capacity integration with galactic venue management
  * Trapeze-theatre collision avoidance with generic TypeScript support
