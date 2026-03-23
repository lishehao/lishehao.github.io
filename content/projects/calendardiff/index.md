---
title: "CalendarDIFF | AI Workflow Runtime for Gmail + ICS"
summary: "AI workflow runtime and schedule-change governance system for Gmail + ICS, built around an explicit state-machine runtime, human review, chronological replay, and a deterministic prefilter -> LLM path."
tags: ["FastAPI", "PostgreSQL", "Redis", "LLM Workflow", "Runtime", "LLM"]
weight: 5
featured: true
liveUrl: "https://cal.shehao.app"
previewTone: "sky"
metrics:
  - "state-machine runtime"
  - "human review loop"
  - "24-checkpoint replay"
  - "overall interception 72.1%"
---

## Overview

CalendarDIFF is an AI workflow runtime and schedule-change governance system for Gmail + ICS. The point is not to treat the LLM as a black box that directly returns answers, but to unify connector intake, prefiltering, proposal generation, human review, state progression, and notification inside one recoverable and observable workflow runtime.

## System Design and Evaluation

- Designed and implemented a Gmail + ICS schedule-change governance backend that collapses connector intake, prefiltering, LLM extraction, canonical state apply, human review, and notification into one explicit state-machine runtime for long-running task progression, recovery, and stage-level observability.
- Reframed the system around an agent-workflow model: the model generates proposals while a deterministic runtime owns state progression, persistence, and recovery, supporting an approve / reject / edit / manual fallback human-in-the-loop loop.
- Built an annual chronological replay harness that advances Gmail/ICS signals in real timestamp order and pauses at checkpoints for real API-backed human decisions, validating stability, recoverability, and operator burden under continuous evolution rather than only offline parser regression.
- Designed a multi-stage Gmail filtering and extraction pipeline around deterministic prefilter -> LLM, and evaluated a prefilter -> DistilBERT -> LLM path for cost and quality tradeoffs, using token / cache / latency / stability as the optimization surface.
- Reworked the source-sync runtime to unify bootstrap / replay accounting, explicit stage/substage/progress tracking, source observability, and operator guidance inside one state machine, improving runtime blocker localization and maintainability.
- Completed system-level evaluation over an annual dataset covering 24 checkpoints and 10,368 full-sim Gmail messages; achieved 100% prefilter target recall and 72.1% overall interception, and established token/cache/latency metrics plus a stability acceptance workflow.

## Tech Stack

- FastAPI
- PostgreSQL
- Redis
- BERT
- OpenAI API
- Docker

## Status

- Live site: **[cal.shehao.app](https://cal.shehao.app)**

## Links

- Live: https://cal.shehao.app
- GitHub: https://github.com/lishehao/CalendarDIFF
