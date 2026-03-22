---
title: "CalendarDIFF"
summary: "AI schedule-change governance runtime for ICS + Gmail with explicit state, human review, and replay-driven reliability validation."
tags: ["FastAPI", "PostgreSQL", "Redis", "AI Agent", "Runtime", "LLM"]
weight: 5
featured: true
liveUrl: "https://cal.shehao.app"
previewTone: "sky"
metrics:
  - "live product deployed"
  - "human review in the critical path"
  - "24-checkpoint replay"
  - "target recall 100%"
---

## Overview

CalendarDIFF is an AI schedule-change governance backend for ICS + Gmail. Instead of treating the problem as simple parsing plus notification, it organizes connectors, LLM extraction, semantic proposals, human review, and notification into an explicit runtime for long-running agent tasks.

## Core Problem

Schedule-change pipelines are full of noisy inputs, cross-source conflicts, and long-tail cases. A fully automatic system turns extraction mistakes into false notifications; a fully manual one does not scale.

## System Design

- Turned connectors, extraction, proposal, review, and notify into explicit stages with recoverable state transitions
- Collapsed Gmail intake into a deterministic prefilter plus structured extraction path so the model only handles the semantic part
- Put human review in front of critical state transitions instead of using it as a weak after-the-fact fallback

## Runtime and Reliability

- **Explicit state-machine runtime** for task progression, retries, recovery, and notification boundaries
- **Message-level parse cache** to stabilize retries and replay runs
- **Bad-sample isolation** so long-tail requests do not amplify failure across the whole pipeline
- **Replay / acceptance reporting** to benchmark behavior across checkpoints and regressions

## Tech Stack

- FastAPI
- PostgreSQL
- Redis
- BERT
- OpenAI API
- Docker

## Impact

- Built an annual chronological replay covering **24 checkpoints** and **10,368 Gmail full-sim messages**
- Reached target recall **100%** and overall interception **72.1%**
- Emitted token, cache, latency, and stability metrics for benchmark and regression tracking
- Deployed the live app at **[cal.shehao.app](https://cal.shehao.app)**

## Links

- Live: https://cal.shehao.app
- GitHub: https://github.com/lishehao/CalendarDIFF
