---
title: "RPG Demo 多智能体叙事生成、编辑与游玩平台"
summary: "已上线的交互叙事产品，围绕 story seed -> preview -> author -> publish -> play 主链、Author Copilot 编辑链路、状态化 Play runtime 与 benchmark 评测构建。"
tags: ["FastAPI", "React", "TypeScript", "LangGraph", "LangChain", "AI Engineering"]
weight: 8
featured: true
previewTone: "ember"
liveUrl: "https://rpg.shehao.app"
metrics:
  - "完整 author -> play 主链"
  - "多阶段 agent runtime"
  - "最多 3 个差异化建议"
  - "checkpoint / session 恢复"
  - "15/15 会话完成"
  - "首回合中位数 2.4s"
---

## 概览

这是一个已上线的交互叙事产品，核心是把故事创作、AI 编辑和游玩运行时放进同一个可控闭环。系统围绕 story seed -> preview -> author job -> publish -> play 主链、Author Copilot 编辑链路、状态化 Play runtime 与 benchmark 评测构建，不再把模型当作“直接续写故事”的黑盒。

## 核心问题

叙事产品若只停留在“生成内容”，很难让编辑、发布与运行形成稳定闭环。真正困难的不是文本生成本身，而是让 AI 修改过程可控、运行时状态一致，并把质量判断从主观体验收敛到可观测的系统指标。

## 系统设计与评测

- 负责从 0 到 1 设计并实现 RPG Demo 的完整产品工作流，把原本分散的叙事生成脚本收敛成 story seed -> preview -> author job -> publish -> play 的统一主链。
- 主导 Author Copilot 智能体编辑链路，支持用户用自然语言对人物设定、剧情骨架、结局倾向与玩法规则提出修改意图，并完成 生成建议 -> 预览 diff -> 应用/撤销 的人机协作闭环。
- 设计 Copilot proposal 状态机与 editor-state 契约，建立独立工作区承接 draft / applied / superseded / stale 等状态，保证多轮 AI 修改不会直接污染主草稿。
- 将 author 生成流程拆成 story frame、cast、beat plan、rulepack、play plan 等多个子 workflow，统一结构化输出、校验、repair 与 fallback 策略，降低大模型输出抖动对主链的破坏。
- 设计 play runtime 的多阶段 agent 流程，把一次玩家输入拆为 interpret -> ending judge -> pyrrhic critic -> render 等阶段，每阶段单独治理 schema、telemetry 与错误恢复。
- 为 Copilot 和 benchmark driver 增加多版本候选与 helper-style agent 调用模式，同一任务可生成多个有区分度的方案，并支持后续 agent/module 并发复用。
- 完成前后端接口分层与状态治理，避免产品前端直接依赖内部 bundle / trace 数据，建立稳定 API contract，使 UI 层与 agent 内核可独立演进。
- 实现 author job、play session 与 checkpoint 持久化恢复能力，支持服务重启后继续编辑或继续游玩，把一次性 demo 提升为具备真实运行态的 agent 系统。
- 建立真实评测基线：单轮覆盖 5 stories × 3 persona workflows = 15 条完整游玩链路，统一采集时间、token、cache、fallback、ending distribution 与主观体感；最佳轮次 15/15 session 完成、render fallback 0%、首回合提交中位数 2.4s，累计真实 play benchmark 达 100+ sessions 级别。

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
