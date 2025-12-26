---
"@savvy-web/dependency-package": minor
---

Enhanced async quacking with comprehensive safety measures

The rubber ducks have unionized and demanded async/await support, but we're not taking any chances. This release introduces defensive layers around async quacking operations to ensure your debugging sessions remain stable and predictable.

**What's Protected:**

- **Circuit Breaker Pattern**: Prevents quack storms from overwhelming your system. If multiple quacks fail in succession, the circuit breaker temporarily halts operations until things stabilize.

- **Timeout Safeguards**: Every async quack now has a configurable timeout (default: 5 seconds) to prevent hanging operations. No more waiting indefinitely for a duck to finish thinking!

- **Automatic Retry Logic**: Failed quacks can be automatically retried with exponential backoff (up to 3 attempts by default). The system logs each attempt for monitoring purposes without exposing internal details.

- **Input Validation**: All quack options are thoroughly validated before execution. Volume levels are capped at 11 (it goes to 11!), and duration limits prevent accidentally infinite quacks.

- **Graceful Degradation**: If all else fails, the system provides safe fallback responses rather than crashing your debugging session.

**Migration Notes:**

The existing `quackAsync()` and `quack()` methods remain unchanged for backward compatibility. New defensive wrappers are available through `safeQuackAsync()` and the `QuackCircuitBreaker` class for applications requiring extra protection.

We've stress-tested these safeguards extensively, but please monitor your quack operations closely during the initial rollout. Report any anomalies immediately so we can adjust the safety parameters.
