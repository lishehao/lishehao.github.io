---
title: "关于"
summary: "李佘昊的背景、经历与 LLM workflow / 后端系统方向。"
tags: ["Profile", "UCSD", "LLM Workflow", "Backend", "AI Engineering"]
---

我是李佘昊，目前就读于 UC San Diego，专业是 Mathematics-Computer Science，求职方向为 LLM Workflow / Software Engineer Intern。重点方向是后端系统与 AI 工程化，关注 LLM workflow 运行时、结构化输出、评测验证，以及把 AI 能力真正落到可运行、可维护的工作流中。

## 基本信息

- University of California, San Diego（UCSD）
- 专业：Mathematics-Computer Science
- 预计毕业时间：2027 年 6 月
- GPA：3.95
- 当前所在地：上海，中国

## 实习经历

### 赛炜 - 软件工程实习生 / 测试工程实习生
上海，中国 | 2025.07 - 2025.09

参与医疗影像设备方向的内部测试与协同流程工具建设，负责需求理解、实现、调试验证与上线支持。与测试工程师和 PM 协作推进工具落地，提升执行效率与流程一致性。

## 我在做什么类型的系统

- **LLM workflow 运行时系统**：把长链路任务拆成显式状态、可恢复步骤和可追踪输出
- **人工介入工作流**：把审核、纠错和确认放在真正关键的位置，而不是事后兜底
- **评测与可观测性**：关注回放、基准评测、日志和稳定性指标，而不只是在“调用模型”

## 代表项目

- **[CalendarDIFF｜面向 Gmail + ICS 的 AI 工作流运行时 / 日程变更治理系统](/zh/projects/calendardiff/)** - 将 connector、prefilter、proposal、人工审核与通知收敛为显式状态机 runtime，围绕 chronological replay 与人机协同闭环构建
- **[AI 自动叙事与 Workflow 评测平台](/zh/projects/ai-narrative-platform/)** - 将 LLM 放入结构化工作流，由持久化创作工作流与确定性交互运行时承接长流程交互
- **[自动带载断载测试工具](/zh/projects/auto-load-off-test/)** - 面向实际验证流程的自动化工具，强调可重复性与可追踪性
- **[流程自动化项目](/zh/projects/mail-to-dingtalk-todo/)** - 包括 Email -> DingTalk 待办与 GitHub Issues -> DingTalk 摘要链路

## 技术栈

- **编程语言**：Python、Java、C/Cpp
- **框架与工程**：FastAPI、Pydantic、LangGraph、Pytest、React、TypeScript、Vite
- **基础设施**：PostgreSQL、Redis、SQLite、Docker
- **AI 工程**：OpenAI API、结构化输出、提示词设计、基准评测

## 亮点数据

- CalendarDIFF：**24 个检查点**年度回放，**10,368 封 Gmail 全仿真邮件**；目标召回率 **100%**，拦截率 **72.1%**
- 叙事平台：**5 个故事 × 3 条评测流程**完成率 **100%**；最佳轮次 p95 单回合 **13.3s**，渲染回退率 **0%**
- Auto Load-Off：测试准备与结果整理工时下降 **75%**

## 联系方式

- Email: `lishehao@gmail.com`
- GitHub: [github.com/lishehao](https://github.com/lishehao)
- LinkedIn: [李佘昊 / Shehao Li](https://www.linkedin.com/in/shehao-li-897626267/)
- 简历: [/resume/](/resume/)
