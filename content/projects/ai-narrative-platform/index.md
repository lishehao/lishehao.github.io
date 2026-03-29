---
title: "RPG Demo Multi-Agent Narrative Generation, Editing, and Play Platform"
summary: "Live interactive narrative product built around the story seed -> preview -> author -> publish -> play loop, an Author Copilot editing workflow, a stateful Play runtime, and benchmark evaluation."
tags: ["FastAPI", "React", "TypeScript", "LangGraph", "LangChain", "AI Engineering"]
weight: 8
featured: true
previewTone: "ember"
liveUrl: "https://rpg.shehao.app"
metrics:
  - "full author -> play loop"
  - "multi-stage agent runtime"
  - "up to 3 variants"
  - "checkpoint recovery"
  - "15/15 sessions complete"
  - "2.4s median first submit"
---

## Overview

This project is a live interactive narrative product built around the story seed -> preview -> author job -> publish -> play loop, an Author Copilot editing workflow, a stateful Play runtime, and a benchmark layer spanning the full product path. Instead of treating the model as a black-box story generator, the system makes editing, application, and validation part of one controllable product flow.

## Core Problem

Narrative systems are easy to prototype but hard to edit, validate, and evolve. The hard part is not raw text generation; it is keeping AI edits controllable, runtime state consistent, and quality evaluation tied to the real product loop rather than isolated prompt tests.

## System Design and Evaluation

- Designed and implemented the full RPG Demo product workflow, turning scattered narrative-generation scripts into a single story seed -> preview -> author job -> publish -> play runtime path.
- Led the Author Copilot editing workflow so users can issue natural-language requests against generated drafts, producing structured modifications for character setup, story spine, ending tendency, and gameplay rules before a preview diff -> apply/undo loop.
- Designed a Copilot proposal state machine and editor-state contract with an isolated workspace supporting draft / applied / superseded / stale states so multi-turn AI edits stay controllable and recoverable.
- Split the authoring pipeline into story frame, cast, beat plan, rulepack, and play plan sub-workflows, with shared structured-output validation, repair, and fallback rules to reduce LLM instability on the main path.
- Designed the Play runtime as a multi-stage agent workflow, decomposing each player turn into interpret -> ending judge -> pyrrhic critic -> render so schema enforcement, telemetry, and failure recovery can be managed per stage.
- Added multi-variant candidate generation and helper-style agent invocation patterns for Copilot and benchmark drivers so the same task can produce meaningfully different options and be reused by future internal agents/modules.
- Implemented frontend/backend contract layering that separates product APIs, editor-state data, and bundle / trace internals, allowing the UI surface and agent core to evolve independently.
- Added persistence and recovery for author jobs, play sessions, and checkpoints so the system can survive restarts and behave like a real agent runtime rather than a one-shot demo.
- Established a real evaluation baseline: each round covers 5 stories × 3 persona workflows = 15 complete playthroughs, aggregating time, token, cache, fallback, ending distribution, and subjective feel; the best round reached 15/15 completed sessions, 0% render fallback, and 2.4s median first-submit latency, with 100+ cumulative real benchmark sessions.

## Tech Stack

- FastAPI
- React
- TypeScript
- LangGraph
- LangChain
- PostgreSQL

## Status

- Live site: **[rpg.shehao.app](https://rpg.shehao.app)**
- Repository is private for now
