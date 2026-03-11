---
title: "自动带载断载测试工具"
summary: "面向 AWG + 示波器验证流程的 Python 自动化工具，补齐 validation、logging、retry/timeout 与 CSV/MAT 导出。"
tags: ["Python", "Test Automation", "PyVISA", "SCPI", "Tkinter", "Data Logging"]
weight: 20
---

## 概览

Auto Load-Off Test 是一个面向仪器验证流程的 Python 自动化工具。它自动控制 AWG 与示波器，标准化测试准备和执行过程，并输出结构化结果，让验证运行可以被重复执行和横向比较。

## 问题

手工验证流程通常很慢，也容易在细节上不一致。测试工程师需要反复配置仪器、执行相同步骤、收集输出并整理结果，导致整个流程很难保持可重复性。

## 方案

- 自动化完成 AWG + 示波器验证链路
- 补齐 validation、logging、retry/timeout 和 CSV/MAT 导出能力
- 把偏手工的实验室流程转成可重复执行、可供团队实际使用的工具

## 架构

- **UI 层**：负责运行配置和执行控制
- **仪器层**：基于 PyVISA + SCPI 编排设备命令
- **输出层**：保存结构化日志和可供后续比较的导出产物

## 技术栈

- Python
- PyVISA
- SCPI
- Tkinter
- CSV / MAT 导出

## 结果

- 测试准备与结果整理工时下降 **75%**
- 支撑 **约 5 名使用者** 的实际验证工作流
- 提升了内部测试运行的可重复性与可追踪性

## 链接

- GitHub: https://github.com/lishehao/auto-load-off-test
