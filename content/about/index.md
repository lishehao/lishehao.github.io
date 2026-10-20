---
title: "About"
summary: "Background, internships, and selected work of Shehao Li: AI agent evaluation, AI products, and instrument test software."
tags: ["Profile", "UCSD", "AI Product", "Test Automation", "AI Engineering"]
---

I’m Shehao Li, a Mathematics-Computer Science undergraduate at UC San Diego. I like building software where the hard part is not only writing code, but turning an ambiguous workflow into something a user can run, inspect, recover, and improve.

Both of my internships involved systems that can quietly do something different from what they were asked. At Intalight in 2025, the values my test program set on the instruments often came back slightly different, and some instruments simply stop at their own limit when asked to go past it, without an error. My program read the settings back and warned the operator when one was out of tolerance. At DMYH in 2026, I read the logs of an AI agent's runs and reported runs that ended with an acceptable-looking result although the log showed something had gone wrong. That is the problem I want to keep working on: checking whether an AI agent carried out a task the way it was asked to, not only whether its output looks right, and building the software that lets many people run agents at the same time.

## Snapshot

- University of California, San Diego (UCSD)
- Major: Mathematics-Computer Science
- Expected graduation: June 2027
- GPA: 3.952; Provost Honors in 8 quarters
- From Shanghai, China; currently studying at UC San Diego

## Experience

### DMYH · Technical Product Manager Intern
Shanghai, China (remote until June 20) | Apr 2026 - Sep 2026

DMYH is an AI startup in Shanghai.

- Evaluated runs of the company's GUI agent, an agent that operates apps to complete written tasks: I read its run logs and reported runs that ended with an acceptable-looking result although the log showed something had gone wrong.
- Extended the company's basic log evaluation into an automated pipeline that judges each action by comparing the screen before it with the screen after it.
- Built, with coding agents, the company's topic-selection tool, which suggests video ideas to the content operators based on reference videos and existing ideas.

### Intalight · Technical Product Intern
Shanghai, China | Jul 2025 - Sep 2025

Intalight is an ophthalmic-imaging company. There, the hardware team often set up frequency-response measurements on an arbitrary waveform generator and an oscilloscope by editing Python scripts by hand. I was the sole developer of a Python/Tkinter program written to replace that step.

- I asked the colleagues who ran the measurements what took their time, and had the program handle configuration, units, and output formats.
- After setting the generator's frequency and amplitude and the oscilloscope's range and offset, the program queries them back, continues with what the instruments report, and warns the operator when a value is out of tolerance.
- Threads, a queue, and a stop event coordinate acquisition with parts of the window's state; Start stays disabled while a test runs.
- Results are saved as MAT, TXT, and CSV files with plots, in formats standardized with the operators' feedback. After test engineers at the company had tested it on real instruments, engineers in the systems group used it.

The internship version is tag [v0.1.0](https://github.com/lishehao/auto-load-off-test/tree/v0.1.0) of the public repository. I wrote it myself, except for part of the instrument-driver file, which came from others.

## Teaching

### UC San Diego · CSE 003 Tutor
Fall 2026

- Tutor a pod of students in CSE 3 (Fluency in Information Technology), assist the weekly lab, and grade homework on Gradescope.

## Selected Work

- **[Tiny Stories / RPG Demo](/projects/ai-narrative-platform/)**: an interactive story system I built with coding agents in 2026. One premise becomes a cast, a player role, and a 12-turn story; sessions are stored in SQLite and can be replayed, and a reviewer view shows the state behind each turn.
- **[Auto Load-Off Test](/projects/auto-load-off-test/)**: the frequency-response test program from my Intalight internship, and the 2026 restructuring of it that a coding agent wrote to my specification.

## Skills

- **Languages**: Python, Java, C, C++
- **Tools**: FastAPI, React, Tkinter, PostgreSQL/vector, SQLite, Git, CI/testing
- **AI systems**: tool calling, structured outputs, retrieval/embeddings, trace/replay, LLM-as-judge

## Contact

- Email: `lishehao@gmail.com`
- GitHub: [github.com/lishehao](https://github.com/lishehao)
- LinkedIn: [Shehao Li](https://www.linkedin.com/in/shehao-li-897626267/)
- Resume: [/resume/](/resume/)
