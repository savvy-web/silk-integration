# @savvy-web/linked-2

## 5.0.7

### Patch Changes

- Updated dependencies [b3ddf87]
  - @savvy-web/dependency-package@0.8.0

## 5.0.6

### Patch Changes

- Updated dependencies [dd65e65]
  - @savvy-web/dependency-package@0.7.0

## 5.0.5

### Patch Changes

- Updated dependencies [4b2fdca]
  - @savvy-web/dependency-package@0.6.0

## 5.0.4

### Patch Changes

- Updated dependencies [edbfb25]
  - @savvy-web/dependency-package@0.5.0

## 5.0.3

### Patch Changes

- 31bc396: The afternoon sun has been causing quite the theatrical crisis! Our matinee spotlights were casting shadows in all the wrong directions, and frankly, we were worried the entire production might collapse under the weight of improper illumination. What if the audience noticed? What if the critics wrote scathing reviews about our shadow placement? The anxiety was palpable backstage.

  But fear not—we've nervously, carefully, and with many double-checks implemented proper time-of-day awareness for our stage lighting system. The shadows now fall exactly where they should during afternoon performances, and we can all breathe a slightly less panicked breath. Though, to be honest, we're still a bit concerned about the evening shows. And what about matinees on cloudy days? Should we have accounted for that? Oh dear...

  At least the shadows are fixed. For now. Probably. We hope.

## 5.0.1

### Patch Changes

- 13d1000: The applause cleanup fix arrives with a heavy heart. MonologueDelivery no longer hoards the echoes of past standing ovations - each performance's memory now fades gracefully into the theatrical mist, as all beautiful moments must. The stage is cleared, though perhaps we wish it weren't. Memory leaks patched, memories themselves released.

## 1.2.1

### Patch Changes

- 43c680f: The curtain falls on blocking animations.

  Once, costume changes held the entire performance hostage - every sequin settling, every button fastening demanded the full attention of the main thread. The audience waited. The actors paused. Time itself seemed to hold its breath.

  No more.

  Now transitions flow through an asynchronous queue, each costume change a whisper in the night rather than a thunderclap demanding silence. At 60 frames per second, the show glides on, smooth as silk, while behind the scenes, wardrobes transform in perfect harmony with the browser's own heartbeat.

  The old ways are gone. We do not mourn them - we simply... remember.

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

### Patch Changes

- Updated dependencies [7c463f2]
- Updated dependencies [504972f]
  - @savvy-web/dependency-package@0.4.0

## 1.1.2

### Patch Changes

- Updated dependencies [feabc57]
  - @savvy-web/dependency-package@0.3.0

## 1.1.1

### Patch Changes

- 6c4b2b3: Converted costume change animations to async to prevent main thread blocking.

  We noticed—well, we were worried about—the main thread getting blocked during quick costume changes. What if an actor needed to do a rapid costume montage? What if the audience was watching and suddenly everything froze mid-outfit? The thought kept us up at night.

  So we fixed it. Probably. We hope.

  The new async animation system includes:
  - **Async Costume Animator** - Uses a configurable scheduler instead of blocking the thread. We added a setTimeout fallback just in case requestAnimationFrame isn't available. You never know what environment you'll be in. Better safe than sorry.
  - **Animation Frame Scheduler** - Manages all the animation callbacks. It tracks how many frames each animation has run, just in case something gets stuck. If an animation runs for more than 10,000 frames, we stop it. Is that the right number? We're not sure. But it feels safe.
  - **FPS Monitor** - Because how do you know things are okay unless you measure them? It tracks current FPS, average FPS, dropped frames, and whether performance is "acceptable." We set acceptable at 55 FPS. That's probably fine. Right?

  We also added an emergency `cancelAllAnimations()` function. You shouldn't need it. But if everything goes wrong... it's there. Just in case.

  Costume changes should now be smooth at 60fps. We think. Please let us know if they're not.

## 1.1.0

### Minor Changes

- 2a89bc8: feat: add understudy management system

  At last, the Theatre of Theatrical Types acknowledges those who wait in the wings—the understudies, the eternally prepared, the shadows of stars who know every line but rarely speak them aloud. This release introduces a complete understudy management system, a bittersweet addition that reminds us that for every performer basking in applause, another watches from the darkness, script in hand, heart full of quiet hope.

  The new type definitions capture the essence of the understudy's existence: always ready, seldom called. The assignment system pairs each leading role with its shadow, creating bonds that exist in rehearsal rooms and empty stages long after the audience has gone home.

  Perhaps most poignant is the emergency replacement logic—the mechanism that transforms years of patient waiting into a single, trembling moment of opportunity. When the star cannot go on, when the show must continue, the understudy finally steps into the light they've watched from afar for so long.
  - Introduced `Understudy` type definitions for tracking backup performers and their assigned roles
  - Implemented understudy assignment system with support for multiple role coverage
  - Added emergency replacement logic for seamless last-minute substitutions

## 0.1.1

### Patch Changes

- c85055a: docs: add dramatic pause notation examples

  The Theatre of Theatrical Types now includes documentation for dramatic pause notation. Method actors no longer need to wonder how to represent that perfect moment of emotional silence in their code.
  - Added glossary of theatrical timing terms
  - Included code examples for various pause types

## 0.1.0

### Minor Changes

- 11765ef: feat: add cosmic show manager for unified theatre productions

  The Theatre of Theatrical Types presents the Cosmic Show Manager! This dramatic new module orchestrates theatrical productions across the entire Grand Unified experience, ensuring every performance is worthy of a standing ovation from audiences spanning multiple galaxies.

  Our theatrical type hierarchy has been redesigned to accommodate the unique demands of cosmic entertainment. Understudies are now managed across solar systems—when your lead actor gets stage fright on Alpha Centauri, a backup performer can teleport in from the Andromeda Galaxy with their lines already memorized via quantum script encoding. The MonologueDelivery system no longer suffers from applause data memory leaks; audience appreciation is now properly persisted across intermissions.

  Costume change animations have been upgraded to maintain 60fps even during supermoon gravitational fluctuations. Dramatic pause notation documentation now includes timing calibration for light-speed delays, ensuring that the perfect moment of theatrical silence is experienced simultaneously by all audience members regardless of their position in spacetime.
  - Interstellar understudy management with quantum teleportation support
  - Applause data persistence across cosmic intermissions
  - 60fps costume animations with supermoon stabilization
  - Dramatic pause timing calibrated for relativistic effects

### Patch Changes

- Updated dependencies [11765ef]
  - @savvy-web/dependency-package@0.2.0

## 0.0.1

### Patch Changes

- Updated dependencies [64479f5]
- Updated dependencies [2521761]
- Updated dependencies [2521761]
  - @savvy-web/dependency-package@0.1.0
