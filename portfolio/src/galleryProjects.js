// Migrated from the two PUBLIC GitHub Pages case studies, 2026-09-20.
// 2026-10-19: wording updated to match the case studies
// (Tiny Stories as built with coding agents; Auto Load-Off split into the 2025
// internship version and the 2026 restructuring). rpg.shehao.app link removed.
// The three draft/hideFromProjects entries intentionally stay unpublished.
export const galleryProjects=[
 {id:'tiny',slug:'ai-narrative-platform',title:'Tiny Stories',subtitle:'RPG Demo',color:'#f5d78c',ink:'#36213f',
  medium:['AI · Interactive storytelling','AI · 互动叙事'],
  summary:['From one premise to a 12-turn story you can play, replay and inspect.','从一个故事前提，到可以游玩、回放和检查的 12 回合故事。'],
  video:'/assets/tiny-stories-demo.mp4',poster:'/assets/tiny-stories-video-poster.jpg',
  repository:'https://github.com/lishehao/RPG_Demo',
  steps:[['Seed','构思'],['Play','游玩'],['Replay','回放']],
  features:[
   ['More than a chatbot','不只是聊天机器人','One premise becomes a cast, a player role with a private objective and an opening scene, then a 12-turn story of choices and free-form actions.','一个故事前提会生成角色、带私人目标的玩家身份和开场，然后进入 12 回合的故事，可以选选项，也可以自由行动。'],
   ['State that is kept','状态会保存下来','Story templates, sessions and messages are stored in SQLite behind typed API contracts, so a finished run can be replayed.','故事模板、会话和消息通过类型化接口存进 SQLite，结束的一局可以回放。'],
   ['A run you can inspect','每一局都能检查','A reviewer view shows the state behind each turn. The advisor can read the run but cannot change the story. Built with coding agents.','reviewer 视图展示每一回合背后的状态；顾问能读这一局，但不能改动故事。整个项目用 coding agent 构建。'],
  ],stack:'React · TypeScript · FastAPI · Python · SQLite'},
 {id:'auto',slug:'auto-load-off-test',title:'Auto Load-Off Test',subtitle:'2025 internship · 2026 rebuild',color:'#cbd1ad',ink:'#253b31',
  medium:['Python · Instrument automation','Python · 仪器自动化'],
  summary:['Turn a repeated lab procedure into a run you can configure, inspect and reproduce.','把重复的实验室操作，变成可配置、可检查、可复现的测试流程。'],
  video:'/assets/hyperframe-replay.mp4',poster:'/assets/hyperframe-video-poster.jpg',repository:'https://github.com/lishehao/auto-load-off-test',
  note:['Illustrative Hyperframe replay · simulated measurements','Hyperframe 演示回放 · 测量数据为模拟值'],
  steps:[['Configure','配置'],['Measure','测量'],['Export','导出']],
  features:[
   ['One program instead of edited scripts','一个程序代替手改脚本','Written to replace the hand-edited Python scripts behind frequency-response measurements; saves MAT, TXT and CSV results with plots.','为替代硬件组做频响测量时常常要手改的 Python 脚本而写，结果存成 MAT、TXT、CSV 和图表。'],
   ['Check what the instruments did','核对仪器实际设成了什么','The 2025 version reads back the generator frequency and amplitude and the oscilloscope range and offset, and warns when one is outside a tolerance.','2025 版会读回示波器的量程、偏置和信号源的幅度、频率，超出容差就提示。'],
   ['Restructured in 2026','2026 年重构','A coding agent rewrote it to my specification: checks before settings are sent, an event log, timeouts and 168 tests that run without hardware. It no longer reads back range and offset.','coding agent 按我的要求重写：加了发送前的参数检查、事件日志、超时处理和 168 个不接硬件的测试；量程和偏置不再读回比对。'],
  ],stack:'Python · Tkinter · PyVISA · SCPI · MAT / TXT / CSV'},
];
