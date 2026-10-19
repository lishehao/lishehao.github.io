---
title: "Tiny Stories / RPG Demo"
displayTitle: "Tiny Stories / RPG Demo"
summary: "2026 年我用 coding agent 做的互动故事系统：一个故事前提会变成 12 回合的故事，有玩家身份、不能改动故事的顾问、可持久化的会话、回放和 reviewer 视图。"
tags: ["FastAPI", "React", "TypeScript", "SQLite", "AI Engineering"]
weight: 8
featured: true
previewTone: "ember"
visual: "rpg"
metrics:
  - "12 回合游玩"
  - "类型化 API 契约"
  - "SQLite 会话与回放"
  - "reviewer 视图"
---

## 概览

Tiny Stories 想回答一个问题：大模型生成的故事，能不能像一个设计好的游戏流程，而不是一个聊天机器人？玩家输入一个故事前提，系统生成角色、带私人目标的玩家身份和开场，然后进入 12 回合的故事：每回合可以从几个选项里选，也可以自由写一个行动。结局根据这一局的历史生成，结束的一局可以回放。

## 怎么做的

2026 年我用 coding agent 构建了它：前端是 React，后端是 FastAPI/Python。

- **类型化 API 契约。** 后端用 Pydantic 模型，前端用对应的 TypeScript 类型。
- **会话可持久化。** 故事模板、会话和消息记录存在 SQLite 里，会话会保存下来，结束的一局可以回放。
- **先定状态，再生成。** 每次调用模型之前，先由 Python 代码整理这一回合的状态：每个角色想推动什么、推向下一次转折的压力、物品和最近的后果。模型按结构化格式返回下一幕和它的选项。
- **有边界的顾问。** 另一个模型可以读这一局的内容给玩家出主意，但不能改动故事状态。
- **reviewer 视图。** 会话回放和 reviewer 视图是我设计的，可以看到玩家界面背后的故事前提、阶段、身份、选项数、物品和结局状态。

## 状态

Tiny Stories 是作品集项目，不是经过验证的消费级产品。游玩流程是通的，但玩家愿不愿意重玩、分享结果，还没有得到验证。

## 技术栈

- React（TypeScript）
- FastAPI（Python）
- Pydantic
- SQLite

## 链接

- 代码仓库：**[github.com/lishehao/RPG_Demo](https://github.com/lishehao/RPG_Demo)**
- 案例说明：**[docs/CASE_STUDY.md](https://github.com/lishehao/RPG_Demo/blob/main/docs/CASE_STUDY.md)**
