# Recoger Mobile App

> Companion mobile app for compliance status and notifications.

---

## Overview

The Recoger Mobile App is a Flutter-based application for iOS and Android. It provides a companion experience for viewing compliance status, receiving alerts, and managing mobile devices.

**Repo:** `recoger-mobile`
**Status:** Planned
**Priority:** Secondary (after desktop MVP)

---

## Technology Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Flutter | Cross-platform, single codebase |
| Language | Dart 3.2+ | Null safety, modern features |
| State | Riverpod | Clean state management |
| HTTP | Dio | API client |
| Storage | flutter_secure_storage | Sensitive data |
| Auth | local_auth | Biometric support |

---

## Planned Features

### Dashboard
- Overall compliance score
- Device status summary
- Issues requiring attention
- Trend charts

### Device List
- All registered devices
- Per-device compliance status
- Last check-in time
- Quick actions

### Notifications
- Push notifications for issues
- Alert when devices fall out of compliance
- Weekly summary digest

### Mobile MDM-Lite
- Register mobile device itself
- Mobile security posture
- Screen lock detection
- Device encryption status

### Settings
- Notification preferences
- Account management
- App settings

---

## Security Implementation

### Secure Storage
```dart
final storage = FlutterSecureStorage();
await storage.write(key: 'refresh_token', value: token);
```

### Biometric Auth
```dart
final localAuth = LocalAuthentication();
final didAuthenticate = await localAuth.authenticate(
  localizedReason: 'Please authenticate to view compliance data',
);
```

### Certificate Pinning
- Pin API server certificate
- Fallback for certificate rotation
- Warning on mismatch

---

## Architecture

```
┌─────────────────────────────────────────────┐
│                 Flutter App                  │
├──────────────┬──────────────┬───────────────┤
│    UI Layer  │ Business     │  Data Layer   │
│  ┌────────┐  │  ┌────────┐  │  ┌─────────┐  │
│  │Screens │  │  │Services│  │  │API      │  │
│  │Widgets │  │  │State   │  │  │Client   │  │
│  │Theme   │  │  │Logic   │  │  │Storage  │  │
│  └────────┘  │  └────────┘  │  └─────────┘  │
└──────────────┴──────────────┴───────────────┘
```

---

## Screen Wireframes

### Dashboard
```
┌─────────────────────────────┐
│ Recoger            [avatar] │
├─────────────────────────────┤
│  ┌───────────────────────┐  │
│  │    Compliance: 94%    │  │
│  │    ████████████░░     │  │
│  └───────────────────────┘  │
│                             │
│  Devices                    │
│  ┌───────────────────────┐  │
│  │ MacBook Pro      ✓    │  │
│  │ iPhone 15        ✓    │  │
│  │ Windows Laptop   !    │  │
│  └───────────────────────┘  │
│                             │
│  Recent Issues              │
│  • Windows laptop needs     │
│    encryption               │
└─────────────────────────────┘
```

---

## API Integration

Uses same API as desktop agent (`api.recoger.co`):

| Endpoint | Purpose |
|----------|---------|
| `GET /v1/dashboard` | Dashboard data |
| `GET /v1/devices` | Device list |
| `GET /v1/devices/{id}` | Device details |
| `POST /v1/devices/mobile/register` | Register mobile device |
| `GET /v1/notifications` | Notification history |

---

## Platform Considerations

### iOS
- Minimum iOS 15+
- App Store guidelines compliance
- Push notifications via APNs
- Keychain for secure storage

### Android
- Minimum Android 10 (API 29)
- Google Play Store compliance
- Push notifications via FCM
- Keystore for secure storage

---

## Development Phases

### Phase 1: View Only
- Authentication
- Dashboard view
- Device list view
- Basic notifications

### Phase 2: Mobile Device
- Register mobile device
- Mobile compliance checks
- Push notification integration

### Phase 3: Management
- Device actions
- User management
- Advanced features

---

## Dependencies on Other Components

| Dependency | Status | Notes |
|------------|--------|-------|
| API authentication | Ready | JWT flow implemented |
| Dashboard endpoints | In Progress | Need mobile optimization |
| Push notifications | Planned | Need backend support |
| Mobile device APIs | Planned | Need spec and implementation |

---

*For security requirements, see `universe/security.md`*
