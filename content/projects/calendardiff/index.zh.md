---
title: "CalendarDIFF｜面向 Gmail + ICS 的 AI Agent 工作流系统 / 日程变更治理平台"
summary: "面向 Gmail + ICS 的 AI Agent 工作流系统 / 日程变更治理平台，围绕结构化 proposal、人工审批、显式状态机 runtime、MCP 接口与全年 replay 验收构建。"
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

CalendarDIFF 是一个面向 Gmail + ICS 的 AI Agent 工作流系统 / 日程变更治理平台。核心不是让模型直接给出业务结论，而是把 source 接入、规则过滤、LLM 建议生成、状态流转、人工审批与通知下发整合进同一套可运行、可恢复、可观测的工作流后端。

## 系统设计与评测

- 从 0 到 1 设计并实现 Gmail + ICS 场景下的 AI Agent 工作流后端，完成 source 接入、规则过滤、LLM 建议生成、状态流转、人工审批、通知下发等核心链路。
- 设计人机协同决策机制：LLM 仅负责生成结构化 proposal，业务系统负责状态推进、落库、重试与异常恢复，避免模型直接写业务真相。
- 基于显式状态机重构 runtime，引入 stage / substage / progress 与 source observability，提升长链路任务的稳定性、可恢复性和问题定位效率。
- 实现 context / proposal / approval-ticket 三层 Agent 后端接口，并通过 MCP Server 暴露给外部智能体客户端，在受控权限下支持上下文读取、建议生成和低风险动作确认。
- 搭建全年 replay 验收与评测体系，覆盖 Gmail/ICS 全链路，验证系统在真实时间序列下的稳定性、成本与人工操作复杂度。
- 在 10,368 封 Gmail full-sim 数据上完成评测，target recall 100%、overall interception 72.1%，并建立 token / cache / latency / stability 指标闭环。

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
