// Homepage rooms, rendered from the site's single project file (data/projects.json).
// Names, one-line summaries, links and colors live there; edit that file, not this one.
import data from '../../data/projects.json' with {type:'json'};

export const galleryProjects=[...data.projects].sort((a,b)=>a.order-b.order).map(p=>({
 id:p.id,slug:p.slug,title:p.name,subtitle:p.subtitle||p.kicker,
 color:p.palette.room,ink:p.palette.ink,
 medium:p.site.medium,summary:[p.one_liner,p.site.summary_zh],
 video:p.site.video,videoWebm:p.site.video_webm,poster:p.site.poster,
 repository:p.links.repo,live:p.links.live||p.links.reviewer_demo,
 note:p.site.note,steps:p.site.steps,features:p.site.features,
 stack:p.stack.join(' · '),caseStudy:Boolean(p.links.case_study),
}));
