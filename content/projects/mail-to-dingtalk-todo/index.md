---
title: "DingTalk To-Do Creator from Email"
summary: "Email-to-task automation pipeline that extracts structured workflow data from IMAP mailboxes, creates DingTalk To-Dos, and preserves idempotent processing state."
tags: ["Python", "IMAP", "Email Parsing", "Workflow Automation", "DingTalk"]
weight: 30
---

## Overview

This project converts workflow emails into assigned DingTalk To-Dos. It polls an IMAP mailbox, extracts structured ECO fields from qualified emails, creates tasks for configured recipients, and stores processed state so repeated scans remain idempotent.

## Problem

A lot of operational work starts inside email, but manual copy/paste into a task system is slow, error-prone, and easy to duplicate when a mailbox is scanned repeatedly.

## Solution

- Pulled recent mail from IMAP within a bounded time window
- Parsed structured fields from plain-text or HTML email bodies
- Created DingTalk To-Dos for configured recipients
- Stored processed `Message-ID` values to prevent duplicate task creation

## Tech Stack

- Python
- IMAP
- Email parsing
- DingTalk OpenAPI / SDK
- BeautifulSoup
- dotenv

## Impact

- Handled **about 200 emails per day** in a stable daily workflow
- Served **about 10 users** in an internal task-conversion pipeline
- Made the email-to-task process consistent and restart-safe through idempotent state handling

## Links

- GitHub: https://github.com/lishehao/mail-to-dingtalk-todo
