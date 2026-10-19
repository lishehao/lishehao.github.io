---
title: "Tiny Stories / RPG Demo"
displayTitle: "Tiny Stories / RPG Demo"
summary: "An interactive story system I built with coding agents in 2026: one premise becomes a 12-turn story with a player role, an advisor that cannot change the story, persistent sessions, replay, and a reviewer view."
tags: ["FastAPI", "React", "TypeScript", "SQLite", "AI Engineering"]
weight: 8
featured: true
previewTone: "ember"
visual: "rpg"
metrics:
  - "12-turn play loop"
  - "typed API contracts"
  - "SQLite sessions + replay"
  - "reviewer view"
---

## Overview

Tiny Stories asks whether an LLM story generator can feel like a designed game loop instead of a chatbot. A player types one premise. The system builds a cast, a player role with a private objective, and an opening scene, then runs a 12-turn story in which the player picks from a few options or writes a free-form action. The ending is built from the history of that run, and a finished run can be replayed.

## How it is built

I built it in 2026 with coding agents: a React frontend and a FastAPI/Python backend.

- **Typed API contracts.** Pydantic models on the backend, mirrored by TypeScript types in the frontend.
- **Persistent sessions.** Story templates, sessions, and message history are stored in SQLite, so sessions persist and a finished run can be replayed.
- **State before generation.** Before each model call, Python code assembles the turn's state: what each character is pushing for, the pressure toward the next twist, inventory, and recent consequences. The model returns structured output for the next scene and its options.
- **A bounded advisor.** A second model can read the run's context to advise the player, but it cannot change the story state.
- **Reviewer view.** I designed the session replay and the reviewer view, which shows the seed, stage, role, number of options, inventory, and ending state behind the player's screen.

## Status

Tiny Stories is a portfolio project, not a validated consumer product. The play loop works, but whether players want to replay a story or share a result is still unproven.

## Tech Stack

- React (TypeScript)
- FastAPI (Python)
- Pydantic
- SQLite

## Links

- Repository: **[github.com/lishehao/RPG_Demo](https://github.com/lishehao/RPG_Demo)**
- Case study: **[docs/CASE_STUDY.md](https://github.com/lishehao/RPG_Demo/blob/main/docs/CASE_STUDY.md)**
