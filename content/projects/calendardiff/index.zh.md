---
title: "CalendarDIFF｜AI 日程变更治理系统"
summary: "面向 ICS + Gmail 的 AI 日程变更治理运行时，通过显式状态机、人工审核和回放验收控制长链路任务风险。"
tags: ["FastAPI", "PostgreSQL", "Redis", "AI Agent", "Runtime", "LLM"]
weight: 5
featured: true
liveUrl: "https://cal.shehao.app"
previewTone: "sky"
metrics:
  - "真实项目已上线"
  - "关键状态有人审"
  - "24 个检查点回放"
  - "目标召回率 100%"
---

## 概览

CalendarDIFF 是一个面向 ICS + Gmail 的 AI 日程变更治理后端。它不是简单的“邮件解析 + 通知”系统，而是把连接器、LLM 抽取、语义候选变更、人工审核与通知组织成显式状态机运行时，用来承接长链路智能体任务。

## 核心问题

日程变更链路天然带有长尾样本、多源冲突和噪声输入。若完全自动化，抽取误差和跨源关联错误会在链路中被放大，最终直接变成错误通知；若全部人工处理，又无法承受真实流量和长期运行。

## 系统设计

- 把连接器、抽取、proposal、review 和 notify 拆成显式阶段，保证每一步都可恢复、可追踪、可观察
- 将 Gmail intake 收敛为确定性预筛 + 结构化抽取链路，让 LLM 只处理真正需要语义判断的部分
- 用人工审核台承接不确定 proposal，把纠错与确认放在关键状态转换前，而不是在通知后补救

## Runtime 与可靠性

- **显式状态机运行时**：把推进、重试、失败恢复和通知边界都编码进系统状态
- **消息级解析缓存**：减少重复解析，提高重试与回放的稳定性
- **坏样本隔离**：把异常输入与长尾请求限制在局部阶段，避免放大全链路风险
- **回放与验收报告**：为全年回放、检查点验收和指标对比提供统一基线

## 技术栈

- FastAPI
- PostgreSQL
- Redis
- BERT
- OpenAI API
- Docker

## 结果

- 搭建全年时序回放验收，覆盖 **24 个检查点**、**10,368 封 Gmail 全仿真邮件**
- 达到目标召回率 **100%**、总体拦截率 **72.1%**
- 持续输出 token、缓存命中、延迟和稳定性指标，用于基准评测与回归验证
- 已上线地址：**[cal.shehao.app](https://cal.shehao.app)**

## 链接

- 线上地址：https://cal.shehao.app
- GitHub: https://github.com/lishehao/CalendarDIFF
