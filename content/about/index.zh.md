---
title: "关于"
summary: "李佘昊的背景、实习经历和代表项目：AI agent 评测、AI 产品与仪器测试软件。"
tags: ["Profile", "UCSD", "AI Product", "Test Automation", "AI Engineering"]
---

我是李佘昊，目前在 UC San Diego 就读 Mathematics-Computer Science。我比较感兴趣的不是“单纯把代码写出来”，而是把一个模糊的需求或复杂流程，做成别人可以运行、理解、复盘、继续改进的软件系统。

我的两段实习都碰到过这样的系统：没有照要求做，也不报错。2025 年在 Intalight，仪器的设定常常和测试程序发出去的值差一点；有些仪器被要求超过自身上限时，只走到上限为止，也不报错。我的程序会把设定读回来，超出容差就提示操作员。2026 年在 DMYH，我读 AI agent 的运行日志，上报那些结果看起来没问题、日志里却出了错的运行。这正是我想继续做的：检查 AI agent 有没有按要求的方式完成任务，而不只是看输出像不像样；以及做能让很多人同时运行 agent 的系统。

## 基本信息

- University of California, San Diego（UCSD）
- 专业：Mathematics-Computer Science
- 预计毕业时间：2027 年 6 月
- GPA：3.952；8 个学季获 Provost Honors
- 来自上海，目前在 UC San Diego 就读

## 实习经历

### DMYH · 技术产品经理实习生（Technical Product Manager Intern）
上海，中国（6 月 20 日前远程）| 2026.04 - 2026.09

DMYH 是上海的一家 AI 创业公司。

- 评测公司的 GUI agent（按书面任务操作 App 的智能体）：阅读它的运行日志，上报结果看起来没问题、日志里却出了错的运行。
- 把公司原有的基础日志评测扩展成自动化 pipeline，通过比较动作前后的两屏来判断每一个动作。
- 用 coding agent 搭建公司的选题工具，根据参考视频和已有的点子给内容运营推荐视频选题。

### Intalight · 产品与工程实习生（Product & Engineering Intern）
上海，中国 | 2025.07 - 2025.09

Intalight 是一家眼科影像公司。硬件组做频响测量时，常常要手改 Python 脚本来设置任意波形发生器和示波器。我是为替代这一步而写的 Python/Tkinter 程序的唯一开发者。

- 我去问做测量的同事时间花在哪里，然后让程序负责配置、单位和结果格式。
- 设完示波器的量程、偏置和信号源的幅度、频率后，程序把它们读回来，按仪器报告的值继续，超出容差时提示操作员。
- 用线程、队列和 stop event 协调采集和部分界面状态；测试进行中开始按钮一直禁用。
- 结果存成 MAT、TXT、CSV 文件和图表，格式根据操作员的反馈统一。公司的测试工程师在仪器上测过之后，系统组的工程师用了它。

实习版是公开仓库里的 tag [v0.1.0](https://github.com/lishehao/auto-load-off-test/tree/v0.1.0)。除了仪器驱动文件里来自别人的部分，其余都是我自己写的。

## 教学经历

### UC San Diego · CSE 003 Tutor
2026 年秋季

- 在 CSE 3（Fluency in Information Technology）负责一组学生的辅导，协助每周的 lab，并在 Gradescope 上批改作业。

## 代表项目

- **[Tiny Stories / RPG Demo](/zh/projects/ai-narrative-platform/)**：2026 年我用 coding agent 做的互动故事系统。一个故事前提会生成角色、玩家身份和 12 回合的故事；会话存在 SQLite 里，可以回放，reviewer 视图能看到每一回合背后的状态。
- **[Auto Load-Off Test](/zh/projects/auto-load-off-test/)**：Intalight 实习时写的频响测试程序，以及 2026 年由 coding agent 按我的要求写的重构版。

## 技能

- **编程语言**：Python、Java、C、C++
- **工具**：FastAPI、React、Tkinter、PostgreSQL（含向量检索）、SQLite、Git、CI 与测试
- **AI 系统**：tool calling、结构化输出、检索与 embedding、trace 与 replay、LLM-as-judge

## 联系方式

- Email: `lishehao@gmail.com`
- GitHub: [github.com/lishehao](https://github.com/lishehao)
- LinkedIn: [李佘昊 / Shehao Li](https://www.linkedin.com/in/shehao-li-897626267/)
- 简历: [/resume/](/resume/)
