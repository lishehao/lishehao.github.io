---
title: "GitHub Issues to DingTalk"
summary: "Webhook-based GitHub issue digest service that aggregates issue events, performs incremental sync, and pushes summaries into DingTalk for responsible owners."
tags: ["Automation", "DevOps", "Integration"]
weight: 35
---

## Overview

This service turns GitHub issue activity into DingTalk summaries for internal owners. It aggregates webhook events, supports incremental sync, and reduces the need for teams to manually watch large issue queues.

## Problem

When issue volume grows, important updates are easy to miss and responsibility becomes harder to track across teams.

## Solution

- Ingested GitHub issue events through webhooks
- Aggregated changes into digest-friendly summaries instead of forwarding noisy one-by-one alerts
- Supported incremental sync so summaries stay current without full rescans

## Tech Stack

- Python
- GitHub Webhooks
- HTTP integration
- DingTalk messaging

## Impact

- Summarized **1000+ issues per day**
- Covered **about 50 responsible owners**
- Stayed in stable production use for **around six months**

## Links

- GitHub: https://github.com/lishehao/github-issues-to-dingtalk
