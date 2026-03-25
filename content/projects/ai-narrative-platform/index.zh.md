---
title: "Author Copilot 叙事编辑与评测平台"
summary: "已上线的交互叙事产品，围绕 Author Copilot 编辑链路、状态化 Play runtime 与 author -> publish -> play 全链路评测构建。"
tags: ["FastAPI", "React", "TypeScript", "LangGraph", "LangChain", "AI Engineering"]
weight: 8
featured: true
previewTone: "ember"
liveUrl: "https://rpg.shehao.app"
metrics:
  - "Author Copilot 编辑链路"
  - "最多 3 个差异化建议"
  - "8 类 editor-state 视图"
  - "15/15 会话完成"
  - "首回合中位数 2.4s"
---

## 概览

这是一个已上线的交互叙事产品，核心是把故事创作、AI 编辑和游玩运行时放进同一个可控闭环。系统围绕 Author Copilot 编辑链路、状态化 Play runtime 与 author -> publish -> play 全链路评测构建，不再把模型当作“直接续写故事”的黑盒。

## 核心问题

叙事产品若只停留在“生成内容”，很难让编辑、发布与运行形成稳定闭环。真正困难的不是文本生成本身，而是让 AI 修改过程可控、运行时状态一致，并把质量判断从主观体验收敛到可观测的系统指标。

## 系统设计与评测

- 负责设计并实现一个 Author Copilot 智能体编辑链路，用户生成故事草稿后，可通过自然语言指令让系统对人物设定 / 剧情骨架 / 结局倾向 / 玩法规则生成结构化修改建议，并完成 生成建议 -> 预览 -> 应用 的人机协作闭环。
- 设计 Copilot proposal 状态机与编辑态契约，建立独立 editor-state 作为主工作区，支持 draft / applied / superseded / stale 等状态，保证多轮 AI 修改过程可控、可回溯。
- 为智能体增加“多版本建议”能力，同一条用户指令在同一版草稿上可生成多个有区分度的候选方案，并支持 Try another，提升了智能体交互自然度和可用性。
- 完成 Copilot 前后端接口分层与状态治理，避免产品前端直接依赖内部 bundle / trace 数据，提升了智能体系统的演进性和维护性。
- 建立真实评测基线：单轮覆盖 5 stories × 3 persona workflows = 15 条完整游玩链路，统一采集时间、token、cache、fallback、ending distribution 与主观体感；最佳轮次 15/15 session 完成、render fallback 0%、首回合提交中位数 2.4s，累计真实 play benchmark 可写为 100+ sessions 级别。

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
