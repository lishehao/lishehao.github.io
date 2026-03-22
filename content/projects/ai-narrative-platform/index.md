---
title: "AI Narrative Platform"
summary: "Multi-turn narrative agent system where Author produces executable story packs and Play runs on a deterministic runtime with benchmarkable behavior."
tags: ["FastAPI", "React", "TypeScript", "LangGraph", "LangChain", "AI Engineering"]
weight: 8
featured: true
previewTone: "ember"
metrics:
  - "real multi-agent benchmark"
  - "deterministic play runtime"
  - "15/15 sessions complete"
  - "0% render fallback"
---

## Overview

This project is a multi-turn narrative agent system. The point is not to let the model directly write the whole story, but to place LLMs inside a structured workflow: Author produces executable story packs, while Play lets the model handle action understanding, ending preference judgment, and text rendering, with deterministic runtime state progression everywhere else.

## Core Problem

Free-form LLM orchestration makes narrative systems hard to debug, hard to validate, and hard to reproduce under repeated use. The hardest part is not text generation itself; it is the semantic mismatch between endings and state feedback, plus failure recovery across long-running turn sequences.

## System Design

- Used **LangGraph** for a persisted Author workflow with explicit run, event, and artifact tracking
- Kept **Play runtime** deterministic, with LLMs limited to action understanding, ending judgment, and rendering
- Added structured-output validation, failure recovery, ending gates, turn traces, and benchmark diagnostics

## Evaluation and Impact

- Built a real multi-agent benchmark loop that generates **5 new stories per round**
- Had **3 persona agents** play through them via real APIs and report subjective experience
- Aggregated time, token, cache, fallback, and ending-distribution metrics into one evaluation surface
- Best round reached **15/15 completed sessions** with **0% render fallback**

## Tech Stack

- FastAPI
- React
- TypeScript
- LangGraph
- LangChain
- PostgreSQL

## Status

- Private prototype for now; public repo is not available yet
