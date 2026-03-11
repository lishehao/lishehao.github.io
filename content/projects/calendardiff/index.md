---
title: "CalendarDIFF"
summary: "Schedule-change management system that ingests ICS and Gmail signals, routes uncertain cases through review, and sends only confirmed notifications."
tags: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "Systems Design", "LLM"]
weight: 5
---

## Overview

CalendarDIFF is a schedule-change management system for calendar-heavy workflows. It ingests ICS and Gmail sources, reconciles cross-source observations into canonical events, and sends only reviewed, confirmed changes into the notification path.

## Problem

Calendar updates arrive from multiple sources and often disagree in timing, naming, or structure. A fully automatic pipeline can easily create false notifications if extracted fields are noisy or if cross-source linking is wrong.

## Solution

- Built a system around a unified public gateway and five backend services
- Kept canonical fields such as title, start, end, location, and status deterministic from parsers/source data
- Limited LLM usage to enrichment and parsing assistance instead of letting it own event identity or time truth
- Added a human review console so uncertain changes are corrected before they enter the notification flow

## Architecture

- **Public gateway + service split**: input, ingest, review, notification, and LLM-facing services behind one public entrypoint
- **Data backbone**: PostgreSQL outbox/inbox patterns plus Redis streams for sync, parsing, review, and notification coordination
- **Review workflow**: evidence view, correction, confirmation, and digest send are separated so candidate changes stay out of the notify path until approved

## Tech Stack

- FastAPI
- Next.js
- PostgreSQL
- Redis
- Docker

## Impact

- Completed a **1-year calendar simulation with 100% stability**
- Preserved deterministic handling for critical time fields while still using LLMs where they add value
- Designed a review-first flow that prevents unconfirmed extracted data from directly reaching end users
- Deployed the live app at **[cal.shehao.app](https://cal.shehao.app)**

## Links

- Live: https://cal.shehao.app
- GitHub: https://github.com/lishehao/CalendarDIFF
