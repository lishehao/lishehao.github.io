---
title: "从邮件创建钉钉待办"
summary: "通过轮询 IMAP 邮箱、提取结构化字段、创建钉钉待办并做幂等控制，把邮件工作流转成稳定的任务链路。"
tags: ["Python", "IMAP", "Email Parsing", "Workflow Automation", "DingTalk"]
weight: 30
---

## 概览

这个项目把流程邮件转换成分配明确的钉钉待办。系统轮询 IMAP 邮箱，提取符合条件邮件中的结构化 ECO 字段，为配置好的接收人创建待办，并通过处理状态持久化保证重复扫描仍然幂等。

## 问题

很多运营或流程型工作都从邮件开始，但手工把邮件内容复制到任务系统既慢又容易出错，而且邮箱重复扫描时很容易产生重复待办。

## 方案

- 在限定时间窗口内从 IMAP 拉取近期邮件
- 从纯文本或 HTML 邮件正文中提取结构化字段
- 为指定接收人创建钉钉待办
- 通过 `Message-ID` 持久化状态防止重复任务

## 技术栈

- Python
- IMAP
- 邮件解析
- DingTalk OpenAPI / SDK
- BeautifulSoup
- dotenv

## 结果

- 在实际工作流中稳定处理 **约 200 封/天** 的邮件
- 支撑 **约 10 名用户** 的内部任务流转
- 通过幂等状态管理让链路在重复扫描或重启后仍保持一致

## 链接

- GitHub: https://github.com/lishehao/mail-to-dingtalk-todo
