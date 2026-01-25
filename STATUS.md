# MCU Status

> **For Claude**: Read this file at the start of every session. It's your bootstrap context (~1100 tokens, budget: 2000).
>
> **MCU** = My Claude Universe - the complete system for AI-human collaboration.
>
> **Error format**: All errors use "Guru Meditation: [description]"

---

## Quick Reference

| Field | Value |
|-------|-------|
| **MCU Version** | v1 |
| **User** | Micke |
| **MCU** | KomplyOne Universe |
| **Current Focus** | recoger / mobile |
| **Mode** | Act |
| **Last Session** | 2026-01-25 |

---

## Current State

### Active Focus
```
Project: recoger
Component: mobile
Mode: act
```

### What's Happening
- Recoger mobile app Firebase setup completed
- Push notifications infrastructure ready for testing

### Recent Progress (This Session - 2026-01-25)

1. **Firebase Project Setup** ✅
   - Created Firebase project `recoger-15dbe`
   - Registered iOS app (`1:445541872646:ios:bc973ba570fe348e567f87`)
   - Registered Android app (`1:445541872646:android:b2186968882d6218567f87`)
   - Generated all configuration files

2. **FlutterFire Configuration** ✅
   - `lib/firebase_options.dart` - Dart configuration
   - `android/app/google-services.json` - Android config
   - `ios/Runner/GoogleService-Info.plist` - iOS config
   - Xcode project updated with Firebase references

3. **APNs Key Uploaded** ✅
   - Created team-scoped APNs key with DeviceCheck/AppAttest
   - Uploaded .p8 file to Firebase Console

### Open Threads
- Set up redirect from recoger.app to recoger.co
- Reconnect GitHub to Cloudflare Pages for auto-deploy
- Test push notifications on iOS/Android devices

---

## Today's Context

### Pending Decisions
_None_

### Waiting On
- User action: Reconnect GitHub to Cloudflare Pages for komplyone-web
- User action: Set up Redirect Rules in recoger.app DNS zone

### Blockers
- Cloudflare Pages GitHub connection lost (workaround: deploy via Wrangler CLI)

---

## Projects Overview

| Project | Status | Priority | Description |
|---------|--------|----------|-------------|
| **komplyone-web** | deployed | primary | Corporate website at komply.one |
| **aimigas** | deployed | secondary | Human-AI collaboration (website live) |
| **komplyone-studios** | deployed | secondary | Product studio website |
| **velador** | deployed | secondary | GRC platform (website live) |
| **recoger** | deployed | secondary | Endpoint compliance platform |

---

## Next Steps

1. **Recoger Mobile - Test Push Notifications** (next session)
   - [ ] Test on iOS simulator/device
   - [ ] Test on Android emulator/device
   - [ ] Verify Firebase initialization in app

2. **Reconnect Cloudflare Pages** (recommended)
   - [ ] Go to Cloudflare Dashboard → Workers & Pages → komplyone-web
   - [ ] Settings → Builds & deployments → Connect to Git
   - [ ] Re-authorize GitHub and select komplyone/komplyone-web

3. **Recoger Domain Redirect** (pending)
   - [ ] Remove custom domains from `recoger-website` Pages project
   - [ ] Configure Redirect Rules: recoger.app -> recoger.co

---

## Quick Commands

```
/load-status     Load current state
/focus [p] [c]   Switch project/component
/save            Save session progress
/plan            Plan mode (no changes)
/act             Act mode (make changes)
/ask             Ask mode (read-only)
/help            Show all commands
```

---

## Files Modified This Session

**Recoger Mobile** (`komplyone-compliance-suite-monorepo/apps/recoger-mobile`):
- `lib/firebase_options.dart` - Firebase Dart configuration
- `android/app/google-services.json` - Android Firebase config
- `ios/Runner/GoogleService-Info.plist` - iOS Firebase config (new)
- `ios/Runner.xcodeproj/project.pbxproj` - Xcode project updated
- `firebase.json` - Firebase project config (new)

---

**Last Updated**: 2026-01-25
**Updated By**: Claude (Firebase setup for recoger-mobile)
