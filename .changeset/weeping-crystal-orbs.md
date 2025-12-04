---
"@savvy-web/fixed-1": major
---

The ancient HTTP polling protocol has been retired to the prophecy museum. After centuries of faithful service (approximately 18 months in software time), the crystal ball's fortune-telling mechanism now streams visions in real-time via WebSocket.

**Breaking Changes:**

- `pollForProphecy()` is deprecated and will emit console warnings about your life choices
- `onProphecyReceived()` callback API replaced with async streaming
- Legacy consumers must migrate using `createMigrationBridge()` or face the crystal ball's disappointment

The new WebSocket-based API offers real-time prophecy delivery, though whether you'll appreciate the speed at which bad news arrives is debatable. Migration utilities are provided for those who remember how to read documentation.
