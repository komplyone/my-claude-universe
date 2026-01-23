# Recoger Desktop Agent

> Cross-platform native agent for endpoint compliance monitoring.

---

## Overview

The Recoger Desktop Agent is a lightweight native application that runs on macOS, Windows, and Linux. It collects device security posture data and reports to the Recoger API.

**Repo:** `recoger-desktop`
**Status:** In Development
**Priority:** Primary focus

---

## Technology Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Tauri 2.0 | Cross-platform, Rust core |
| Backend | Rust | System-level operations |
| Frontend | React + TypeScript | Shared patterns with web |
| Styling | Tailwind CSS | Consistent design system |
| Build | Cargo + Vite | Standard tooling |

---

## Architecture

```
┌─────────────────────────────────────────────────┐
│                   Tauri Shell                    │
├──────────────────────┬──────────────────────────┤
│      React UI        │      Rust Backend        │
│  ┌────────────────┐  │  ┌────────────────────┐  │
│  │ System Tray    │  │  │ Device Collector   │  │
│  │ Settings View  │  │  │ Security Scanner   │  │
│  │ Status Display │  │  │ API Client         │  │
│  └────────────────┘  │  │ Secure Storage     │  │
│                      │  │ Auto-Update        │  │
│                      │  └────────────────────┘  │
└──────────────────────┴──────────────────────────┘
```

---

## Core Features

### Device Information Collection
- Hardware specs (CPU, RAM, disk)
- OS version and patch level
- Hostname and identifiers
- Network configuration

### Security Posture Checks
- Disk encryption status (FileVault, BitLocker, LUKS)
- Firewall enabled
- Automatic updates enabled
- Antivirus/security software
- Screen lock timeout
- Remote login status

### Application Inventory
- Installed applications list
- Version tracking
- Security-relevant software detection

### Background Operation
- System tray icon with status
- Minimal resource usage
- Periodic check-in (configurable interval)
- Offline queueing with sync

---

## Security Considerations

### Secure Storage
- Device tokens in OS keychain (macOS Keychain, Windows Credential Manager)
- No sensitive data in plain files
- Memory-only for runtime secrets

### Communication
- TLS 1.2+ required
- Certificate pinning considered
- JWT authentication with refresh

### Permissions
- Principle of least privilege
- Request only necessary OS permissions
- Clear user consent for data collection

---

## Platform-Specific Notes

### macOS
- Code signing required for distribution
- Notarization for Gatekeeper
- FileVault detection via `fdesetup`
- System Preferences integration path

### Windows
- Code signing for SmartScreen
- BitLocker detection via WMI
- Windows Security Center integration
- MSI/MSIX packaging options

### Linux
- LUKS detection via `cryptsetup`
- AppImage or .deb packaging
- SELinux/AppArmor awareness
- Desktop environment detection

---

## Current Tasks

See `../state/tasks.md` for the complete task list. Key desktop priorities:
- System tray implementation
- Agent-server protocol finalization
- Code signing setup

---

## API Integration

The agent communicates with `api.recoger.co`:

| Endpoint | Purpose |
|----------|---------|
| `POST /v1/devices/register` | Initial device registration |
| `POST /v1/devices/{id}/checkin` | Periodic status report |
| `GET /v1/devices/{id}/config` | Fetch device configuration |
| `POST /v1/devices/{id}/events` | Report security events |

---

## Configuration

User-configurable settings:
- Check-in interval (default: 15 minutes)
- Start on boot
- Show in dock/taskbar
- Notification preferences

Admin-configurable (via API):
- Required security checks
- Compliance policies
- Enforcement mode vs report-only

---

*For security requirements, see `universe/security.md`*
