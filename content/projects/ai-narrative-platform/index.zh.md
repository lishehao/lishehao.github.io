---
title: "AI 自动叙事与 Workflow 评测平台"
summary: "已上线的多回合交互叙事 workflow 产品：创作侧产出可执行故事包，交互侧由确定性运行时承接状态推进与评测。"
tags: ["FastAPI", "React", "TypeScript", "LangGraph", "LangChain", "AI Engineering"]
weight: 8
featured: true
previewTone: "ember"
liveUrl: "https://rpg.shehao.app"
metrics:
  - "真实多流程评测"
  - "交互侧确定性运行时"
  - "15/15 会话完成"
  - "渲染回退率 0%"
---

## 概览

这是一个面向多回合交互叙事的 LLM workflow 系统。核心目标不是“让模型直接写故事”，而是把 LLM 放进结构化工作流：创作侧生成可执行故事包，交互侧只让模型处理动作理解、结局倾向判断与文案渲染，其余状态推进由确定性运行时执行。

## 核心问题

叙事产品若建立在自由编排式 LLM 调度之上，会很难调试、很难验证，也难以在高频运行下稳定复现。真正困难的不是生成文本，而是结局与状态反馈之间的语义错位，以及长流程回合中的失败恢复与可评测性。

## 系统设计

- 用 **LangGraph** 承接持久化创作工作流，记录 run、event 和 artifact
- 让 **交互运行时** 只把模型放在动作理解、结局判断和渲染位置，状态迁移保持确定性
- 增加结构化输出校验、失败恢复、结局门控、回合追踪和基准诊断

## 评测与结果

- 搭建真实多流程评测链路：每轮自动生成 **5 个新故事**
- 由 **3 条角色化流程** 通过真实 API 独立游玩并输出主观体感
- 统一汇总时间、token、缓存命中、回退和结局分布等指标
- 最佳轮次达到 **15/15 个会话完成**，渲染回退率 **0%**

## 技术栈

- FastAPI
- React
- TypeScript
- LangGraph
- LangChain
- PostgreSQL

## 状态

- 线上地址：**[rpg.shehao.app](https://rpg.shehao.app)**
- 当前仓库暂未公开
