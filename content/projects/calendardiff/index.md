---
title: "CalendarDIFF | AI Agent Workflow System for Gmail + ICS"
summary: "AI agent workflow system and schedule-change governance platform for Gmail + ICS, built around structured proposals, human approval, an explicit runtime, MCP interfaces, and annual replay validation."
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

CalendarDIFF is an AI agent workflow system and schedule-change governance platform for Gmail + ICS. The point is not to let the model directly write business truth, but to combine source intake, rules filtering, LLM suggestion generation, state transitions, human approval, and notifications inside one recoverable and observable workflow backend.

## System Design and Evaluation

- Designed and implemented an AI agent workflow backend for Gmail + ICS from the ground up, covering source intake, rules filtering, LLM suggestion generation, state transitions, human approval, and notifications.
- Designed a human-in-the-loop decision model where the LLM only generates structured proposals while the business system owns state progression, persistence, retries, and recovery.
- Rebuilt the runtime around an explicit state machine with stage / substage / progress tracking and source observability to improve long-chain stability, recoverability, and debugging efficiency.
- Implemented a three-layer backend interface for context / proposal / approval-ticket and exposed it through an MCP server so external agent clients can read context, generate suggestions, and confirm low-risk actions under controlled permissions.
- Built an annual replay validation and evaluation framework covering the full Gmail/ICS chain, validating stability, cost, and operator complexity under real time-ordered sequences.
- Evaluated the system on 10,368 full-sim Gmail messages, reaching 100% target recall and 72.1% overall interception while establishing a token / cache / latency / stability metric loop.

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
