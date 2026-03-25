---
title: "CalendarDIFF｜面向 Gmail + ICS 的 AI Agent 工作流系统 / 日程变更治理平台"
summary: "面向 Gmail + ICS 多源接入的 AI 日程变更治理后端，围绕规则过滤、LLM 结构化抽取、proposal 生成、人工审批、显式状态机 runtime 与全年 chronological replay 构建。"
tags: ["FastAPI", "PostgreSQL", "Redis", "AI Agent", "MCP", "LLM"]
weight: 5
featured: true
liveUrl: "https://cal.shehao.app"
previewTone: "sky"
metrics:
  - "AI Agent 工作流后端"
  - "MCP Server 接口"
  - "全年 replay 验收"
  - "overall interception 72.1%"
---

## 概览

CalendarDIFF 是一个面向 Gmail + ICS 多源接入的 AI 日程变更治理后端。系统把 source 接入、规则过滤、LLM 结构化抽取、proposal 生成、人工审批、状态落库与通知下发收敛到同一套可运行、可恢复、可观测的工作流后端中。

## 系统设计与评测

- 从 0 到 1 设计并实现 Gmail + ICS 多源接入的 AI 日程变更治理后端，打通 source 接入、规则过滤、LLM 结构化抽取、proposal 生成、人工审批、状态落库与通知下发全链路。
- 基于显式状态机重构工作流运行时，统一管理 stage / substage / progress、任务重试、失败恢复与 source observability，解决长链路 AI workflow 在真实运行中的卡死、收尾不一致与定位困难问题。
- 设计“LLM 生成建议、业务系统负责裁决”的人机协同机制，确保模型只参与结构化 proposal 生成，不直接写入 canonical state，降低误判对业务真相的污染风险。
- 实现 context / proposal / approval-ticket 三层 Agent 后端接口，并通过 MCP Server 对外暴露受控能力，支持外部智能体进行上下文读取、建议生成与低风险动作确认。
- 搭建全年 chronological replay 验收与评测体系，覆盖 24 个 checkpoint、10,368 封 Gmail full-sim 数据与全年 ICS 时间线，验证系统稳定性、成本与人工操作复杂度。
- 完成系统级评测，target recall 100%、overall interception 72.1%，并建立 token / cache / latency / stability 指标闭环。

## 技术栈

- FastAPI
- PostgreSQL
- Redis
- OpenAI API
- MCP Server
- DistilBERT

## 状态

- 已上线地址：**[cal.shehao.app](https://cal.shehao.app)**

## 链接

- 线上地址：https://cal.shehao.app
- GitHub: https://github.com/lishehao/CalendarDIFF
