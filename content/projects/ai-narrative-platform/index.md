---
title: "Author Copilot Narrative Editing and Evaluation Platform"
summary: "Live interactive narrative product built around an Author Copilot editing loop, a stateful Play runtime, and end-to-end author -> publish -> play evaluation."
tags: ["FastAPI", "React", "TypeScript", "LangGraph", "LangChain", "AI Engineering"]
weight: 8
featured: true
previewTone: "ember"
liveUrl: "https://rpg.shehao.app"
metrics:
  - "Author Copilot editing"
  - "multi-variant suggestions"
  - "author -> publish -> play validation"
  - "15/15 sessions complete"
  - "0% render fallback"
---

## Overview

This project is a live interactive narrative product built around an Author Copilot editing loop, a stateful Play runtime, and an evaluation layer spanning author -> publish -> play. Instead of treating the model as a black-box story generator, the system makes editing, application, and validation part of one controllable product flow.

## Core Problem

Narrative systems are easy to prototype but hard to edit, validate, and evolve. The hard part is not raw text generation; it is keeping AI edits controllable, runtime state consistent, and quality evaluation tied to the real product loop rather than isolated prompt tests.

## System Design and Evaluation

- Designed and implemented an Author Copilot editing loop that lets users issue natural-language instructions against generated drafts, producing structured modification suggestions for character setup, story spine, ending tendency, and gameplay rules before a generate -> preview -> apply collaboration loop.
- Designed a Copilot proposal state machine and editing contract with an isolated editor-state workspace supporting draft / applied / superseded / stale states so multi-turn AI edits remain controllable and recoverable.
- Added multi-variant suggestion support so one instruction over the same draft can produce distinct candidate edits, with Try another behavior instead of near-duplicate outputs.
- Implemented frontend/backend interface layering for Copilot state and product state, separating product APIs, editor-state data, and bundle / trace internals so the system can evolve without leaking workflow internals into the product surface.
- Built a real multi-flow evaluation chain: each round generates 5 new stories, 3 persona workflows play through them via real APIs and report subjective experience, and time, token, cache, fallback, and ending-distribution metrics are aggregated into one evaluation surface; the best round reached 15/15 completed sessions with 0% render fallback.

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
