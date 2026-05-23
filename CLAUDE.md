# Workflow Integration Test Repository

This repository is a test bed for validating the [silk-release-action](https://github.com/savvy-web/silk-release-action) GitHub Action. It simulates a realistic monorepo with various package configurations to test changeset-based release workflows.

Related issue: <https://github.com/savvy-web/silk-release-action/issues/9>

## Repository Structure

```text
pkgs/
├── builder/        # Internal build utilities (ignored by changesets)
├── dependency/     # Shared dependency package (workspace:*)
├── standalone/     # Standalone package depending on dependency
├── linked-1/       # Linked group member 1
├── linked-2/       # Linked group member 2 (depends on dependency)
├── fixed-1/        # Fixed group member 1
└── fixed-2/        # Fixed group member 2 (depends on dependency)
```

## Package Relationships

### Dependency Graph

- `@savvy-web/builder` - Internal build tooling, not published
- `@savvy-web/dependency-package` - Base dependency used by others
- `@savvy-web/standalone-package` - Depends on dependency-package
- `@savvy-web/linked-1` - No dependencies (linked with linked-2)
- `@savvy-web/linked-2` - Depends on dependency-package (linked with linked-1)
- `@savvy-web/fixed-1` - No dependencies (fixed with fixed-2)
- `@savvy-web/fixed-2` - Depends on dependency-package (fixed with fixed-1)

### Changeset Configuration

- **linked**: `[["@savvy-web/linked-1", "@savvy-web/linked-2"]]` - Versions bump together
- **fixed**: `[["@savvy-web/fixed-1", "@savvy-web/fixed-2"]]` - Always same version
- **ignore**: `["@savvy-web/builder"]` - Not versioned/published

## Build System

### Builder Package

The `@savvy-web/builder` package contains shared build utilities (`TestBuildPlugin`) used by all publishable packages. It:

- Manages the `files` array in package.json during builds
- Copies essential files (README, LICENSE, package.json) to dist
- Updates exports and cleans up package.json for publishing

### Build Chain (Turbo)

```text
@savvy-web/builder#build:dev
       ↓
@savvy-web/{package}#typecheck (via ^build:dev dependency)
       ↓
@savvy-web/{package}#build:dev / build:npm (depends on builder#build)
```

### Package Build Outputs

Each publishable package builds to:

- `dist/dev/` - Development build (used for workspace linking)
- `dist/npm/` - NPM publish build

## Testing

Each package has a `__tests__/` folder with vitest tests. Run all tests:

```bash
pnpm vitest --run
```

Projects are configured in `vitest.config.ts` for per-package test isolation.

## Common Tasks

### Build all packages

```bash
pnpm build
```

### Run tests

```bash
pnpm ci:test
```

### Create a changeset

```bash
pnpm changeset
```

### Version packages (applies changesets)

```bash
pnpm changeset version
```

## Testing the Release Action

This repo is designed to be pointed at by the silk-release-action's build step. To test:

1. Create changesets in this repo for various packages
2. Push to trigger the release workflow in silk-release-action
3. Verify that:
   - Linked packages version together correctly
   - Fixed packages maintain same version
   - Dependencies are updated properly
   - Builder package is ignored

## Chaos Agent Testing

The `/chaos` command automates integration testing by picking tickets and creating branches with themed changesets.

### Usage

```bash
/chaos [mood] [issue-number]
```

**Moods:**

- `random` (default) - Pure random ticket selection
- `chaotic` - Prefers multi-package tickets, flowery prose
- `lazy` - Prefers patch/bug tickets, minimal commits
- `ambitious` - Prefers major bumps, complex work

### What It Does

1. Fetches open tickets with `integration-test` label
2. Selects based on mood (or uses specified issue)
3. Creates branch per ticket instructions
4. Creates placeholder `.ts` files in `pkgs/<pkg>/src/`
5. Creates whimsically-named changesets (e.g., `quacking-quantum-ducks.md`)
6. Commits with conventional format
7. Pushes and opens PR

### Key Constraints

- **No code changes** - Only creates placeholder files to avoid merge conflicts
- **Changesets only** - Tests the release workflow without real features
- **Themed prose** - Changesets use package themes from `THEMES.md`
- **Conventional commits** - All commits follow `<type>(<scope>): <description>`

### Package Themes

Each package has a whimsical theme for engaging changeset descriptions:

| Package | Theme |
| --------- | ------- |
| standalone | Interstellar Snack Delivery |
| dependency | Sentient Rubber Duck Debugging Institute |
| fixed-1 | Mystical Crystal Ball Error Prediction |
| fixed-2 | Moonlight-Powered Code Compilation |
| linked-1 | Circus of Chaotic Components |
| linked-2 | Theatre of Theatrical Types |

See `THEMES.md` for full theme details and key concepts.

### Files

- `.claude/commands/chaos.md` - Slash command definition
- `.claude/agents/ticket-chaos.md` - Agent instructions with full theme reference
