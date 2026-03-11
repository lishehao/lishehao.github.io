---
title: "GitHub Issues 到 DingTalk 摘要服务"
summary: "基于 webhook 聚合与增量同步，把 GitHub Issues 活动整理成面向负责人的 DingTalk 摘要。"
tags: ["Automation", "DevOps", "Integration"]
weight: 35
---

## 概览

这个服务把 GitHub issue 活动整理成面向内部负责人的 DingTalk 摘要。它聚合 webhook 事件、支持增量同步，减少团队对大规模 issue 队列的人工盯盘成本。

## 问题

当 issue 量变大以后，关键更新很容易被淹没，跨团队责任归属也更难跟踪。

## 方案

- 通过 webhook 接入 GitHub issue 事件
- 把变更聚合成适合阅读的摘要，而不是逐条转发噪声通知
- 通过增量同步保持摘要结果最新，同时避免全量重扫

## 技术栈

- Python
- GitHub Webhooks
- HTTP 集成
- DingTalk 消息链路

## 结果

- 日均汇总 **1000+ issues**
- 覆盖 **约 50 位负责人**
- 稳定运行 **约半年**

## 链接

- GitHub: https://github.com/lishehao/github-issues-to-dingtalk
