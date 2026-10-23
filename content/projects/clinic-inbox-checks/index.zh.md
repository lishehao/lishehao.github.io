---
title: "Clinic Inbox Checks"
summary: "一个模拟的诊所收件箱：AI agent 按书面政策处理病人消息，读服务器自己记录的检查来判断每次运行有没有照做。2026 年 10 月我用 coding agent 构建。"
tags: ["Python", "Flask", "Playwright", "AI Agents", "Evaluation"]
weight: 6
---

{{< rawhtml >}}
<video controls playsinline preload="metadata" poster="/assets/clinic-inbox-checks-poster.jpg" style="width:100%;height:auto;border-radius:12px;background:#eef1f5">
  <source src="/assets/clinic-inbox-checks-demo.mp4" type="video/mp4">
</video>
{{< /rawhtml >}}

视频在模拟器里重放了一次录制运行的最后几步。画面上 agent 的话引自那次运行的日志，服务器记录是重放时模拟器实际写下的事件。

## 概览

AI agent 在真浏览器里处理一个模拟的初级诊所收件箱，一步一个点击或按键：打开病人消息、看病历、分诊、给医护团队写回复草稿、标记完成，全程按 10 条诊所政策来。12 个任务里有两个，界面显示 "Routing saved"，保存其实丢了。

检查只读服务器自己的事件日志和存储状态，不读 agent 对自己做了什么的说法。病人、消息和诊所都是合成的，规则没有经过临床人员审核。

想法、做什么、测什么由我决定；大部分代码由 coding agent 写。

## 试点结果

claude-haiku-5-5 跑了 60 次，每个任务 5 次：

- **丢失的保存。** 碰到它的 10 次运行，agent 全部重新打开消息，发现仍是 "Not routed yet"，又存了一次。
- **每次标记都是检查错了。** 6 次被标记：1 次来自一条事先写好的检查，它的短语表漏掉了一种换说法；5 次来自另一个模型按同一份政策生成的检查，它的短语表是空的，所以只要保存了回复就判失败。
- **两种检查。** 事先写好的检查和 claude-sonnet-5-5 生成的检查，在 60 次里有 54 次判断一致。

## 怎么做的

- **模拟器。** Flask 应用，服务器端记事件日志；每个任务可以注入故障，比如分诊保存没有存进去。
- **Agent 运行框架。** Playwright 驱动 Chromium；agent 收到页面文字和带编号的控件列表，每一步回一个动作。
- **检查。** 一个小的 JSON 检查语言，两种检查用同一个解释器，所以能逐次运行比较判断。检查是数据，不是代码。

## 技术栈

- Python
- Flask
- Playwright
- JSON 检查语言

## 链接

- 仓库：[github.com/lishehao/clinic-inbox-checks](https://github.com/lishehao/clinic-inbox-checks)
- 运行日志、结果和标记复查：[results/pilot-2026-10](https://github.com/lishehao/clinic-inbox-checks/tree/main/results/pilot-2026-10)
