---
title: "Auto Load-Off Test"
summary: "Python automation tool for AWG + oscilloscope validation flows with validation, logging, retry/timeout handling, and CSV/MAT export."
tags: ["Python", "Test Automation", "PyVISA", "SCPI", "Tkinter", "Data Logging"]
weight: 20
---

## Overview

Auto Load-Off Test is a Python-based validation tool for instrument-driven test workflows. It automates AWG and oscilloscope control, standardizes run setup, and produces structured outputs so verification runs can be repeated and compared reliably.

## Problem

Manual validation runs are slow and inconsistent. Test engineers have to repeatedly configure instruments, execute the same sequence, collect outputs, and整理 results, which makes it hard to keep runs reproducible.

## Solution

- Automated the end-to-end validation sequence for AWG + oscilloscope workflows
- Added validation, logging, retry/timeout handling, and CSV/MAT export
- Turned a manual lab-style process into a repeatable tool that supports actual team usage

## Architecture

- **UI layer** for run configuration and execution control
- **Instrument layer** built on PyVISA + SCPI for command orchestration
- **Output layer** for structured logs and exported artifacts used in later comparison

## Tech Stack

- Python
- PyVISA
- SCPI
- Tkinter
- CSV / MAT export

## Impact

- Reduced test preparation and result整理 effort by **75%**
- Supported a real validation workflow used by **about 5 users**
- Improved repeatability and traceability for internal test runs

## Links

- GitHub: https://github.com/lishehao/auto-load-off-test
