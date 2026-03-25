---
title: "CalendarDIFF | AI Agent Workflow System for Gmail + ICS"
summary: "AI schedule-change governance backend for Gmail + ICS multi-source intake, built around rules filtering, structured LLM extraction, proposal generation, human approval, explicit runtime control, and annual chronological replay."
tags: ["FastAPI", "PostgreSQL", "Redis", "AI Agent", "MCP", "LLM"]
weight: 5
featured: true
liveUrl: "https://cal.shehao.app"
previewTone: "sky"
metrics:
  - "AI agent workflow backend"
  - "MCP server interface"
  - "annual replay validation"
  - "overall interception 72.1%"
---

## Overview

CalendarDIFF is an AI schedule-change governance backend for Gmail + ICS multi-source intake. The system unifies source intake, rules filtering, structured LLM extraction, proposal generation, human approval, state persistence, and notification delivery inside one recoverable and observable workflow backend.

## System Design and Evaluation

- Designed and implemented a Gmail + ICS multi-source AI schedule-change governance backend from the ground up, spanning source intake, rules filtering, structured LLM extraction, proposal generation, human approval, state persistence, and notification delivery.
- Rebuilt the workflow runtime around an explicit state machine that manages stage / substage / progress, retries, recovery, and source observability, addressing stalls, inconsistent completion, and debugging difficulty in long-running AI workflows.
- Designed a human-in-the-loop decision model where the LLM only generates structured proposals while the business system owns canonical-state decisions, persistence, retries, and recovery.
- Implemented a three-layer backend interface for context / proposal / approval-ticket and exposed controlled capabilities through an MCP server so external agents can read context, generate suggestions, and confirm low-risk actions.
- Built an annual chronological replay validation and evaluation framework covering 24 checkpoints, 10,368 full-sim Gmail records, and the full ICS timeline to validate stability, cost, and operator complexity.
- Completed system-level evaluation reaching 100% target recall and 72.1% overall interception, while establishing a token / cache / latency / stability metric loop.

## Tech Stack

- FastAPI
- PostgreSQL
- Redis
- OpenAI API
- MCP Server
- DistilBERT

## Status

- Live site: **[cal.shehao.app](https://cal.shehao.app)**

## Links

- Live: https://cal.shehao.app
- GitHub: https://github.com/lishehao/CalendarDIFF
