---
title: "自动带载断载测试工具"
summary: "2025 年在 Intalight 实习时写的 Python/Tkinter 频响测试程序（tag v0.1.0），以及 2026 年由 coding agent 按我的要求写的重构版。"
tags: ["Python", "Test Automation", "PyVISA", "SCPI", "Tkinter", "Data Logging"]
weight: 20
---

## 概览

Intalight 是一家眼科影像公司。硬件组做频响测量时，常常要手改 Python 脚本来设置任意波形发生器（AWG）和示波器。2025 年 7 月到 9 月实习期间，我是为替代这一步而写的程序的唯一开发者。

仓库里有两个版本。tag [`v0.1.0`](https://github.com/lishehao/auto-load-off-test/tree/v0.1.0) 是我实习时写的那一版；`main` 分支是 2026 年由 coding agent 按我的要求写的重构版。

## 2025 年实习版（v0.1.0）

- **一个程序代替手改脚本。** 我去问做测量的同事时间花在哪里，然后让程序负责配置、单位和结果格式。
- **核对仪器实际设成了什么。** 仪器的设定常常和程序发出去的值差一点；有些仪器被要求超过自身上限时，只走到上限为止，也不报错。设完示波器的量程、偏置和信号源的幅度、频率后，程序把它们读回来，按仪器报告的值继续，超出容差时提示操作员。
- **结构。** 分成设备、通道和测试几层抽象。用线程、队列和 stop event 协调采集和部分界面状态；测试进行中开始按钮一直禁用。
- **输出。** MAT、TXT、CSV 文件，以及增益和 dB 两张图；格式根据操作员的反馈统一。
- **使用。** 公司的测试工程师在仪器上测过之后，系统组的工程师用了它。

除了仪器驱动文件（`equips.py`）里来自别人的部分，这一版由我自己设计和编写。

## 2026 年重构版（main）

coding agent 按我的要求把程序重写成分层结构，加了发送前的参数检查、事件日志、超时处理，以及扫频结束、出错或被停止时都关闭信号源输出的收尾步骤。它也改动了 2025 版的两处检查：设完示波器的量程和偏置后不再读回比对；频率对不上时只发警告，不再停止扫频。168 个自动化测试在 CI 里运行，不接硬件，需要时用假的仪器端口。重构版还没有在真实仪器上跑过。

## 技术栈

- Python
- Tkinter
- PyVISA
- SCPI
- MAT / TXT / CSV 导出

## 链接

- 代码仓库：[github.com/lishehao/auto-load-off-test](https://github.com/lishehao/auto-load-off-test)
- 2025 年实习版：[tag v0.1.0](https://github.com/lishehao/auto-load-off-test/tree/v0.1.0)
