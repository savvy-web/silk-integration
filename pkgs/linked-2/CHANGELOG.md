# @savvy-web/linked-2

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
