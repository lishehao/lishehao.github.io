---
title: "AI Narrative Platform"
summary: "Author/play split AI narrative system with a persisted LangGraph workflow, deterministic runtime, generated SDK contracts, and operational debugging hooks."
tags: ["FastAPI", "React", "TypeScript", "LangGraph", "LangChain", "AI Engineering"]
weight: 8
---

## Overview

This project is an AI narrative platform built around a strict split between Author Mode and Play Mode. The backend uses a layered architecture, exports OpenAPI contracts, and feeds a generated frontend SDK so the product surface stays explicit and versionable.

## Problem

Narrative products built directly on top of free-form LLM orchestration are hard to debug, hard to validate, and hard to keep stable under repeated runtime calls. The challenge is to keep authoring flexibility without giving up deterministic runtime behavior.

## Solution

- Used **LangGraph** for a persisted Author Mode workflow with explicit run, event, and artifact tracking
- Added bounded retries, failure localization, and review gating around story generation
- Kept **Play Mode** on a thin LangChain layer plus a deterministic runtime, so LLMs handle intent recognition and narration rather than owning state transitions
- Exported backend contracts through OpenAPI and consumed them from the frontend through a generated SDK

## Architecture

- **Author Mode**: workflow state persists through run/event/artifact tables and only review-ready outputs can be published
- **Play Mode**: user input is routed, resolved, and committed deterministically before narration is generated
- **LLM boundary**: all model traffic goes through an internal worker layer so prompts, routing, and failures stay observable

## Tech Stack

- FastAPI
- React
- TypeScript
- LangGraph
- LangChain
- PostgreSQL

## Impact

- Completed a **3000-call LLM smoke test with 99.8% stability**
- Made failures easier to localize by separating workflow state, runtime state, and model calls
- Reduced coupling between backend and frontend with generated API contracts

## Status

- Private prototype for now; public repo is not available yet
