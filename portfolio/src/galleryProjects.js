// Migrated from the two PUBLIC GitHub Pages case studies, 2026-09-20.
// The three draft/hideFromProjects entries intentionally stay unpublished.
export const galleryProjects=[
 {id:'tiny',slug:'ai-narrative-platform',title:'Tiny Stories',subtitle:'RPG Demo',color:'#f5d78c',ink:'#36213f',
  medium:['AI · Interactive storytelling','AI · 互动叙事'],
  summary:['From a story seed to a world you can edit, publish and play.','从一个故事种子，到可以编辑、发布与游玩的世界。'],
  video:'/assets/tiny-stories-demo.mp4',poster:'/assets/tiny-stories-video-poster.jpg',
  repository:'https://github.com/lishehao/RPG_Demo',live:'https://rpg.shehao.app',
  steps:[['Seed','构思'],['Author','创作'],['Play','游玩']],
  features:[
   ['An editor, not a black box','不止生成，更能编辑','Author Copilot turns natural-language requests into proposed changes, with a preview diff and apply / undo workflow.','Author Copilot 将自然语言修改转成提案，经过差异预览，再应用或撤销。'],
   ['State that survives the session','状态可保存，也可恢复','Author jobs, play sessions and checkpoints persist across restarts. Structured contracts separate the editor from the agent runtime.','创作任务、游玩会话与检查点支持持久化恢复；编辑器与智能体运行时通过结构化契约解耦。'],
   ['A product loop you can evaluate','让产品流程可评测','Multi-stage authoring and play workflows connect structured validation, repair, telemetry and end-to-end benchmark runs.','多阶段创作与游玩流程连接结构化校验、修复、运行记录和端到端评测。'],
  ],stack:'React · TypeScript · FastAPI · LangGraph · PostgreSQL'},
 {id:'auto',slug:'auto-load-off-test',title:'Auto Load-Off Test',subtitle:'Laboratory tools',color:'#cbd1ad',ink:'#253b31',
  medium:['Python · Instrument automation','Python · 仪器自动化'],
  summary:['Turn a repeated lab procedure into a run you can configure, inspect and reproduce.','把重复的实验室操作，变成可配置、可检查、可复现的测试流程。'],
  video:'/assets/hyperframe-replay.mp4',poster:'/assets/hyperframe-video-poster.jpg',repository:'https://github.com/lishehao/auto-load-off-test',
  note:['Illustrative Hyperframe replay · simulated measurements','Hyperframe 演示回放 · 测量数据为模拟值'],
  steps:[['Configure','配置'],['Measure','测量'],['Export','导出']],
  features:[
   ['One repeatable run','一套可重复执行的流程','Configure and orchestrate an arbitrary waveform generator and oscilloscope through a focused operator interface.','通过统一操作界面配置并控制任意波形发生器与示波器。'],
   ['Failures are part of the workflow','把异常处理纳入流程','Validation, logging, retries and timeouts make failures visible instead of leaving them inside a one-off script.','通过校验、日志、重试与超时处理，让异常可见、可追踪。'],
   ['Evidence you can take away','结果可以带走，也能比较','Structured logs and CSV / MAT exports support later inspection and comparison across validation runs.','结构化日志与 CSV / MAT 导出，支持测试后的检查和跨轮次比较。'],
  ],stack:'Python · Tkinter · PyVISA · SCPI · CSV / MAT'},
];
