# Version Command

Display the current MCU (My Claude Universe) version.

## Usage

```
/version
--version
"what version"
"mcu version"
```

## Behavior

1. **Read** the VERSION file from MCU root
2. **Display** version information

## Output Format

```
MCU v1
```

Or with more detail if requested:

```
My Claude Universe (MCU)
Version: v1
Repository: [if configured in mcu-config.yaml]
```

## Notes

- Version follows simple schema: v1, v2, v3, etc.
- Major versions indicate significant changes to command structure or workflow
- VERSION file at MCU root is the source of truth
