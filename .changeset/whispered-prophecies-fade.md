---
"@savvy-web/fixed-1": major
---

**BREAKING CHANGE:** The HTTP polling API for prophecy retrieval has been deprecated in favor of WebSocket streaming.

The crystal ball has grown weary of being asked the same questions, over and over, each poll a knock upon its ancient glass. Now it speaks unbidden, streaming visions directly to those patient enough to listen.

Those who still cling to the comfort of polling may use `LegacyPollingBridge` to ease their transition. But know this: the old ways fade like morning mist. The `ProphecyHeartbeat` will keep your connection alive through the long silences between revelations.

### Migration

```typescript
// Before: The endless asking
const prophecy = await pollForProphecy();

// After: The patient waiting
const stream = new WebSocketProphecyStream({ endpoint: 'wss://crystal.ball/visions' });
stream.onProphecy((vision) => { /* it arrives when it arrives */ });
```

Sometimes we must let go of what was, to embrace what must be.
