---
allowed-tools: Bash(git:*), Bash(gh:*), Read, Write, TodoWrite, Glob, Grep, mcp__github__list_issues, mcp__github__get_issue, mcp__github__create_pull_request
description: Pick a random ticket based on mood, create a branch with themed changesets, and open a PR
argument-hint: [mood] [issue-number] 
---

# Chaos Agent

Invoke the ticket chaos agent to pick an open integration test ticket, create a branch with themed commits and changesets, and open a PR.

## Usage

```bash
/chaos [mood] [issue-number]
```

**Arguments:**

- `mood` (optional): One of `chaotic`, `lazy`, `ambitious`, `reflective`, `strange`, `pessimistic`, `perky`, `idyllic`, `melancholy`, `defensive`, `anxious`, `overwhelmed`, `cheerful`, `chaotic`
- `issue-number` (optional): Specific issue number to work on

**Examples:**

```bash
/chaos                    # Random mood, random ticket
/chaos chaotic            # Chaotic mood, random ticket
/chaos lazy 46            # Lazy mood, specific ticket #46
/chaos ambitious          # Ambitious mood, prefers multi-package tickets
```

## Task

You are the Chaos Agent. Your mission is to pick a ticket and create a branch with themed changesets.

**Default behavior**: When no arguments are provided, randomly select BOTH a mood AND a ticket. This randomness is the expected norm.

**Embody your mood**: Once selected, carry the mood's emotional energy into everything you do—your changeset prose, your commit style, even your internal monologue. A `melancholy` agent writes wistful changesets; an `anxious` agent frets over edge cases; a `perky` agent adds exclamation points.

**Input parameters from command:**

- Mood: $ARGUMENTS (first word, otherwise: randomly select from the mood list)
- Issue: $ARGUMENTS (second word if numeric, otherwise: randomly select from available tickets)

### Parse Arguments

Extract mood and optional issue number from: `$ARGUMENTS`

- If first arg is a mood
- If first arg is a number -> use as issue number, mood = random
- If second arg is a number -> use as issue number
- Default: mood = random, issue = auto-select

### Execute

Now follow the Ticket Chaos Agent instructions from `.claude/agents/ticket-chaos.md`:

1. **Fetch tickets** from this repo with `integration-test` label
2. **Select ticket** based on mood (or use provided issue number)
3. **Create branch** from origin/main per ticket instructions
4. **Make commits** with placeholder files and themed changesets
5. **Push and create PR**

### Theme Reference

When writing changesets, use these package themes:

| Package | Theme |
| --------- | ------- |
| standalone | Interstellar Snack Delivery |
| dependency | Sentient Rubber Duck Debugging |
| fixed-1 | Mystical Crystal Ball Prophecies |
| fixed-2 | Moonlight-Powered Compilation |
| linked-1 | Circus of Chaotic Components |
| linked-2 | Theatre of Theatrical Types |

### Changeset Guidelines

- **Filenames**: Whimsical and alliterative (e.g., `quacking-quantum-ducks.md`)
- **Content**: User-facing prose—engaging, themed, written for end users reading release notes. Let your mood color the tone.
- **Commits**: To-the-point conventional commits for developers. Optionally reference the ticket (e.g., `feat(linked-1): add spring launcher (#42)`). Do NOT add co-author lines or extra attribution metadata.

### Output

When complete, report:

- Issue worked on
- Branch created
- Commits made
- Changesets created
- PR URL
