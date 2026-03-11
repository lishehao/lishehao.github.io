---
title: "日程变更管理系统"
summary: "接入 ICS 与 Gmail 信号，经过审核链路整合变更结果，只把确认后的变更发送到通知链路。"
tags: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "Systems Design", "LLM"]
weight: 5
---

## 概览

这是一个面向日程密集型工作流的变更治理系统。系统接入 ICS 和 Gmail 两类输入源，把跨来源观察值整合成规范化事件，并只把经过审核确认的变更推进到通知链路。

## 问题

日程更新往往来自多个来源，而且在时间、命名和结构上经常不一致。如果完全自动处理，一旦抽取字段有噪声或跨源关联出错，就很容易把错误结果直接推送给用户。

## 方案

- 设计统一公网入口 + 5 个后端服务的系统结构
- 对标题、开始时间、结束时间、地点、状态等 canonical 字段坚持确定性处理
- 把 LLM 限定在增强抽取和解析辅助环节，不让它主导事件身份或时间真值
- 增加人工审核台，让不确定变更先被查看、纠错和确认，再进入通知链路

## 架构

- **服务拆分**：在统一入口后拆分 input、ingest、review、notification 和 LLM 相关服务
- **数据骨架**：使用 PostgreSQL outbox/inbox 模式和 Redis Streams 串联同步、解析、审核与通知
- **审核工作流**：证据查看、纠错、确认和 digest 发送彼此解耦，候选变更不会直接进入通知路径

## 技术栈

- FastAPI
- Next.js
- PostgreSQL
- Redis
- Docker

## 结果

- 完成 **1 年日历模拟测试，稳定性达到 100%**
- 在保留关键时间字段确定性的同时，把 LLM 用在真正增值的抽取环节
- 通过 review-first 设计，避免未经确认的数据直接触达最终用户
- 已上线地址：**[cal.shehao.app](https://cal.shehao.app)**

## 链接

- 线上地址：https://cal.shehao.app
- GitHub: https://github.com/lishehao/CalendarDIFF
