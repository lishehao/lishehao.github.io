---
title: "Test Automation MultiTimer"
summary: "补充型 Python Tkinter GUI 工具：用 VISA / SCPI 做有时间边界的 DMM 监控，并支持采样、日志与可选 MAT 导出。"
tags: ["Python", "Tkinter", "PyVISA", "VISA", "SCPI", "DMM", "Keysight 34461A", "MAT-File"]
weight: 50
---

## 概览

Test Automation MultiTimer 是一个补充型桌面工具，用于做有明确时长边界的 DMM 监控。系统会配置测量模式、量程和采样间隔，然后持续记录读数，直到运行结束或被手动终止。

## 这个项目解决的问题

长时间手工执行 DMM 监控既重复又容易出错。工程师需要一种方式来稳定保持配置、采样节奏和运行时长的一致性。

## 系统功能

- 枚举 VISA 资源并支持手动输入地址
- 配置 DMM 模式、AC/DC 选项和量程
- 执行定时采样循环，记录时间 / 数值对
- 提供日志视图和手动停止控制
- 尝试周期性保存 / 导出采集结果

## 架构设计

- **入口（`mm_test.py`）**：启动 Tkinter 应用
- **UI 层（`dmm_ui.py`）**：管理配置、运行控制和采集结果
- **仪器层（`dmm_driver.py`）**：封装基于 PyVISA 的 SCPI 指令交互

## 关键技术细节

- Python
- Tkinter
- PyVISA / VISA
- SCPI
- MAT 风格导出链路

## 当前状态 / 限制

- MAT 保存能力在当前运行路径中仍然只接了一部分
- 采样逻辑仍运行在 UI 线程，界面响应依赖等待阶段的频繁 UI 更新

## 链接

- GitHub: https://github.com/lishehao/test-automation-multitimer
