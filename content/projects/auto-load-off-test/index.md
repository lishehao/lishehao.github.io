---
title: "Auto Load-Off Test"
summary: "The Python/Tkinter frequency-response test program I wrote during my 2025 Intalight internship (tag v0.1.0), and its 2026 restructuring, written by a coding agent to my specification."
tags: ["Python", "Test Automation", "PyVISA", "SCPI", "Tkinter", "Data Logging"]
weight: 20
---

## Overview

At Intalight, an ophthalmic-imaging company, the hardware team often set up frequency-response measurements on an arbitrary waveform generator (AWG) and an oscilloscope by editing Python scripts by hand. During my internship, from July to September 2025, I was the sole developer of a program written to replace that step.

The repository holds two versions. Tag [`v0.1.0`](https://github.com/lishehao/auto-load-off-test/tree/v0.1.0) is the program as I wrote it during the internship. The `main` branch is a 2026 restructuring written by a coding agent to my specification.

## The 2025 internship version (v0.1.0)

- **One program instead of edited scripts.** I asked the colleagues who ran the measurements what took their time, and had the program handle configuration, units, and output formats.
- **Check what the instruments actually did.** The values the program set on the instruments often came back slightly different, and some instruments stop at their own limit when asked to go past it, without an error. After setting the generator's frequency and amplitude and the oscilloscope's range and offset, the program queries them back, continues with what the instruments report, and warns the operator when a value is out of tolerance.
- **Structure.** Device, channel, and test abstractions. Threads, a queue, and a stop event coordinate acquisition with parts of the window's state; Start stays disabled while a test runs.
- **Outputs.** MAT, TXT, and CSV files with gain and dB plots, in formats standardized with the operators' feedback.
- **Use.** After test engineers at the company had tested it on real instruments, engineers in its systems group used it.

I wrote this version myself, except for part of the instrument-driver file (`equips.py`), which came from others.

## The 2026 restructuring (main)

A coding agent rewrote the program to my specification as a layered application. It adds checks on settings before they are sent, an event log, timeouts, and cleanup that turns the generator's output off whenever a sweep finishes, fails, or is stopped. It also changed two of the 2025 checks: it no longer reads back the oscilloscope's range and offset after setting them, and a frequency that does not match now raises a warning instead of stopping the sweep. It still reads back the frequency and amplitude at every point. Its 168 automated tests run in CI without hardware, using fake instrument ports where needed. The restructured version has not been run on real instruments.

## Tech Stack

- Python
- Tkinter
- PyVISA
- SCPI
- MAT / TXT / CSV export

## Links

- Repository: [github.com/lishehao/auto-load-off-test](https://github.com/lishehao/auto-load-off-test)
- 2025 internship version: [tag v0.1.0](https://github.com/lishehao/auto-load-off-test/tree/v0.1.0)
