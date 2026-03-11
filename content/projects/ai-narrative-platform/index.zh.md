---
title: "AI 自动叙事平台"
summary: "通过 Author / Play 双模式拆分、持久化 LangGraph 工作流、确定性 runtime 和生成式 SDK 契约，构建可调试、可维护的 AI 叙事系统。"
tags: ["FastAPI", "React", "TypeScript", "LangGraph", "LangChain", "AI Engineering"]
weight: 8
---

## 概览

这是一个围绕 Author Mode 和 Play Mode 明确拆分的 AI 自动叙事平台。后端采用分层架构，导出 OpenAPI 契约，并由前端消费 generated SDK，让接口边界清晰、可版本化、可维护。

## 问题

如果叙事产品直接建立在自由编排式 LLM 调度之上，系统会变得很难调试、很难验证，也很难在高频运行下保持稳定。核心挑战在于：既要保留生成灵活性，又不能放弃运行时的确定性。

## 方案

- 用 **LangGraph** 承接持久化的 Author Mode 工作流，显式记录 run、event 和 artifact
- 围绕故事生成增加有界重试、失败定位和 review gating
- 让 **Play Mode** 建立在薄 LangChain 层 + 确定性 runtime 之上，把 LLM 限定在意图识别和文案生成，而不是状态迁移本身
- 通过 OpenAPI 导出后端契约，并由前端消费 generated SDK，降低前后端耦合

## 架构

- **Author Mode**：工作流状态通过 run/event/artifact 表持久化，只有 review_ready 的结果才能发布
- **Play Mode**：用户输入先被确定性地路由、结算和提交，再生成叙述文本
- **LLM 边界**：模型调用统一经由内部 worker 层，便于观察 prompt、路由和失败原因

## 技术栈

- FastAPI
- React
- TypeScript
- LangGraph
- LangChain
- PostgreSQL

## 结果

- 完成 **3000 次 LLM 调用 smoke test，稳定性达到 99.8%**
- 通过分离工作流状态、运行时状态和模型调用，让失败定位更直接
- 通过生成式 API 契约降低前后端联调成本

## 状态

- 当前为私有原型，暂未公开仓库
