# workflow-integration

A test repository for validating [silk-release-action](https://github.com/savvy-web/silk-release-action).

## What is this?

This monorepo simulates a realistic workspace with multiple packages to test automated release workflows. It's not intended for production use - it exists purely to verify that our release tooling works correctly across different package configurations.

## Package Structure

| Package | Description |
| ------- | ----------- |
| `@savvy-web/dependency-package` | Shared dependency used by other packages |
| `@savvy-web/standalone-package` | Independent package that depends on dependency |
| `@savvy-web/linked-1`, `linked-2` | Linked versioning group (versions bump together) |
| `@savvy-web/fixed-1`, `fixed-2` | Fixed versioning group (always same version) |
| `@savvy-web/builder` | Internal build utilities (not published) |

## Why does this exist?

Testing release automation is tricky - you need a real repository with real packages to verify that changesets, version bumps, and publishing work correctly. This repo provides that test bed without risking actual production packages.

See [silk-release-action#9](https://github.com/savvy-web/silk-release-action/issues/9) for context.
