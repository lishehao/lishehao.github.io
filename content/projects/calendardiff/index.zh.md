---
title: "CalendarDIFF｜面向 Gmail + ICS 的 AI 工作流运行时 / 日程变更治理系统"
summary: "面向 Gmail + ICS 的 AI 工作流运行时与日程变更治理系统，围绕显式状态机、人工审核、chronological replay 和 deterministic prefilter -> LLM 主链路构建。"
tags: ["FastAPI", "PostgreSQL", "Redis", "LLM Workflow", "Runtime", "LLM"]
weight: 5
featured: true
liveUrl: "https://cal.shehao.app"
previewTone: "sky"
metrics:
  - "显式状态机 runtime"
  - "人工审核闭环"
  - "24 个 checkpoint 回放"
  - "overall interception 72.1%"
---

## 概览

CalendarDIFF 是一个面向 Gmail + ICS 的 AI 工作流运行时 / 日程变更治理系统。目标不是把 LLM 当作“直接给答案的黑盒”，而是把 connector 接入、prefilter、proposal 生成、人工审核、状态推进与通知收敛到一套可运行、可恢复、可观测的工作流运行时中。

## 系统设计与评测

- 独立设计并实现面向 Gmail + ICS 的 AI 日程变更治理后端，将 connector 接入、prefilter、LLM 抽取、canonical state apply、人工审核与通知收敛为一套显式状态机 runtime，解决长链路任务推进、失败恢复与阶段可观测问题。
- 以 agent workflow 思路重构系统，不把 LLM 当作“直接给答案的黑盒”，而是让模型负责 proposal 生成，由确定性 runtime 负责状态推进、结果落库与异常恢复，支持 approve / reject / edit / manual fallback 的人机协同闭环。
- 搭建全年 chronological replay 验收框架，将 Gmail/ICS 信号按真实时间顺序推进，并在 checkpoint 停顿后通过真实 API 完成人工决策，验证系统在持续演化场景下的稳定性、可恢复性与 operator 负担，而非只做离线 parser regression。
- 设计 Gmail 多阶段过滤与抽取链路，形成 deterministic prefilter -> LLM 主路径，并对 prefilter -> DistilBERT -> LLM 方案进行成本与效果评估，围绕 token / cache / latency / stability 建立实验与优化闭环。
- 重构 source sync runtime，将 bootstrap / replay 分账、显式 stage/substage/progress、source observability 与 operator guidance 接入同一状态机，提升 runtime blocker 定位能力与系统可维护性。
- 在全年数据集上完成系统级评测，覆盖 24 个 checkpoint、10,368 封 full-sim Gmail；实现 prefilter target recall 100%、overall interception 72.1%，并沉淀 token/cache/latency 指标与稳定性验收流程。

## 技术栈

- FastAPI
- PostgreSQL
- Redis
- BERT
- OpenAI API
- Docker

## 状态

- 已上线地址：**[cal.shehao.app](https://cal.shehao.app)**

## 链接

- 线上地址：https://cal.shehao.app
- GitHub: https://github.com/lishehao/CalendarDIFF
