---
title: "Test Automation MultiTimer"
summary: "Supplementary Python Tkinter GUI for timed DMM monitoring over VISA/SCPI with interval sampling, logging, and optional MAT export."
tags: ["Python", "Tkinter", "PyVISA", "VISA", "SCPI", "DMM", "Keysight 34461A", "MAT-File"]
weight: 50
---

## Overview

Test Automation MultiTimer is a supplementary desktop tool for duration-bounded DMM monitoring. It configures measurement mode, range, and sampling interval, then records readings until the run ends or is manually stopped.

## Problem this project solves

Long-running manual DMM monitoring is repetitive and error-prone. Engineers need a stable way to keep configuration, cadence, and run duration consistent.

## What the system does

- Lists VISA resources and supports manual addressing
- Configures DMM mode, AC/DC selection, and range
- Runs a timed sampling loop and records time/value pairs
- Provides a log console and manual stop control
- Attempts periodic save/export of collected data

## Architecture / design

- **Entry point (`mm_test.py`)** starts the Tkinter application
- **UI layer (`dmm_ui.py`)** manages configuration, run control, and collected data
- **Instrument layer (`dmm_driver.py`)** wraps SCPI commands over PyVISA sessions

## Key technical details

- Python
- Tkinter
- PyVISA / VISA
- SCPI
- MAT-style export path

## Current status / limitations

- MAT save support is only partially wired into the current code path
- Sampling still runs in the UI thread, so responsiveness depends on frequent UI updates during waits

## Links

- GitHub: https://github.com/lishehao/test-automation-multitimer
