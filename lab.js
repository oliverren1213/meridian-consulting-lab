// Small, native-browser tools. Notes and progress never leave this browser.
const labChinese = document.documentElement.lang === 'zh-CN';
const labCopy = labChinese ? {
  output:'本次产出', question:'要问的问题', evidence:'要留下的证据', next:'下一步',
  campus:{
    hku:{title:'HKU：从用户与制度出发',body:'用 PPE 兴趣检验商业假设：用户为什么信任某个平台？规则、信息和行为之间有什么落差？',items:['问最近一次真实转账，而不是“你会不会用”。','记录服务选择、费用理解和切换阻力。','区分用户经历、个人解读与监管事实。'],output:'一页匿名用户主题与仍需核查的制度问题。',link:'#week-4',linkText:'进入客户与竞争练习'},
    hec:{title:'HEC Paris：把分析变成决策',body:'用战略视角把研究收束成一个选择：先服务谁、解决哪个问题、用什么小实验验证？',items:['比较两至三个可执行方案，不只列优点。','说清收益、代价和让判断反转的条件。','用一句话给建议，再给证据与下一步。'],output:'一页选项比较与一个有停止条件的试点。',link:'#week-7',linkText:'进入建议表达练习'},
    bocconi:{title:'Bocconi：让数字解释商业逻辑',body:'把数据与金融科技兴趣用于单位经济分析；每个估算都明确单位、假设和敏感性。',items:['区分转账金额、平台收入与利润。','在统一交易情景下比较费用和到账时间。','检查转化率、获客成本与盈亏平衡点。'],output:'一个可复核的模型与一页关键驱动因素。',link:'#week-3',linkText:'进入盈利能力练习'}
  },
  planNames:['独立准备','双人练习','研究产出','实习行动'],minute:'分钟',
  planTips:{90:'忙周最低版本：完成一个小产出，并把完整技能练习顺延，别假装这一周已经学完。',180:'标准版本：双人练习按 5 分钟对齐、每人 20 分钟练习、15 分钟反馈进行。',225:'深入版本：增加来源核查、第二轮访谈或图表修订，把额外时间用在证据质量上。'},
  planOutput:['读案例，带一个结构或估算。','轮流解释、追问并给具体反馈。','完成问题树、比较表或一页建议。','核实一个岗位或修改一段申请材料。'],
  invalidMeeting:'请选择一个有效的香港日期与时间。',cities:['HKU · 香港','HEC Paris · 巴黎','Bocconi · 米兰'],
  storage:'进度与笔记只保存在当前浏览器，不会同步给搭档。',temporary:'当前浏览器不允许保存；进度与笔记仅在本次访问期间保留。',
  start:'开始',pause:'暂停',resume:'继续',ready:'先读题，再开始计时。',running:'计时中。先讲结构，再计算与建议。',paused:'已暂停，可以整理思路后继续。',finished:'时间到。用两分钟复盘最值得改进的一点。',
  notebook:'你的工作记录',notesLabel:'结构、计算与建议',placeholder:'目标与约束：\n分析结构：\n关键计算（标单位）：\n建议与证据：\n哪些条件会改变建议：\n搭档反馈：',export:'下载本周笔记',complete:'标记本周完成',incomplete:'已完成 · 点击撤销',saved:'笔记已保存在此浏览器。',downloaded:'本周笔记已导出为 Markdown 文件。',
  research:{
    interview:{title:'六个问题，围绕一次真实经历。',items:['最近一次为生活费转账是什么时候？','想完成什么？实际用了哪些步骤？','比较过哪些方式，最终为什么这样选？','有什么不清楚、昂贵或不方便的地方？','什么变化会让你考虑换一种方式？','什么因素让你信任或不信任服务商？'],output:'匿名经历、原话许可与主题记录；不能据此推算总体采用率。'},
    compare:{title:'固定一个情景，才能公平比较。',items:['统一起点、终点、金额、币种与收款方式。','同一天记录总费用、汇率口径、预计到账与适用限制。','每个数字附公开来源、核查日期与前提条件。','把价格事实与“更方便”的个人判断分开。'],output:'4–6 个产品的比较表：场景 / 成本 / 时间 / 条件 / 来源 / 日期。'},
    deck:{title:'先给建议，再让读者看到推理。',items:['第 1–3 页：问题、建议、方法与局限。','第 4–6 页：真实用户行为、差异与替代方案。','第 7–9 页：经济逻辑、选项比较与建议实验。','第 10–12 页：风险、贡献、来源与计算附录。'],output:'10–12 页可读报告；没有证据支撑的内容应删掉或明确标成假设。'}
  },
  career:{
    consulting:{title:'咨询：把推理过程练到能被追问。',items:['练问题拆解、估算、利润分析与简洁建议。','准备两个真实的行为面试故事，说明你的行动与调整。','核实岗位资格，再按目标公司的官方格式练习。'],output:'一次 25 分钟模拟面试、一页反馈、两个两分钟故事。',next:'选一个真实岗位，逐项核对年级、语言、地点与截止日期。'},
    strategy:{title:'企业战略：证明你能支持一个选择。',items:['比较客户、市场或渠道选项，说明选择标准。','把数据转成行动：建议谁做什么、先测试什么。','用研究报告说明证据、取舍、风险和可执行下一步。'],output:'一页执行摘要、一页选项比较、一页试点建议。',next:'阅读目标企业业务与岗位描述，找出它目前关心的一个具体决策。'},
    fintech:{title:'金融科技：把用户问题与商业模型接上。',items:['先理解支付、费用、信任与使用摩擦。','解释收入来源、单位经济模型和关键业务指标。','核实制度与产品限制，不把公开规则当成个人猜测。'],output:'产品比较表、一个简洁模型、一页用户问题与实验设计。',next:'筛选产品、商业分析或战略岗位，核对其实际技能要求。'}
  }
} : {
  output:'WORKING OUTPUT', question:'QUESTION TO ASK', evidence:'EVIDENCE TO KEEP', next:'NEXT ACTION',
  campus:{
    hku:{title:'HKU: begin with users and institutions',body:'Use PPE interests to challenge commercial assumptions: why do users trust a platform, and where do rules, information and behaviour diverge?',items:['Ask about the last real transfer, not hypothetical adoption.','Record provider choice, fee understanding and switching friction.','Separate user experience, interpretation and regulatory facts.'],output:'One page of anonymised themes and institutional questions to verify.',link:'#week-4',linkText:'Practise customers & competition'},
    hec:{title:'HEC Paris: turn analysis into a decision',body:'Use the strategy perspective to narrow the study to a choice: who to serve, which problem to solve, and what small experiment would test it?',items:['Compare two or three executable options, with trade-offs.','Name benefits, costs and a condition that reverses the choice.','Give the answer in one sentence, then evidence and a next step.'],output:'One options slide and a pilot with a stop condition.',link:'#week-7',linkText:'Practise recommendations'},
    bocconi:{title:'Bocconi: make numbers explain the business',body:'Apply data and fintech interests to unit economics. Give every estimate a unit, assumption and sensitivity check.',items:['Separate transfer value, platform revenue and profit.','Compare fees and arrival times under the same transfer scenario.','Check conversion, acquisition cost and break-even.'],output:'One reproducible model and a slide on the key driver.',link:'#week-3',linkText:'Practise profitability'}
  },
  planNames:['Prepare alone','Practise together','Build the research','Move an application'],minute:'min',
  planTips:{90:'Busy-week minimum: finish one small output and shift the full skill session back. Do not treat a shortened week as full completion.',180:'Standard session: 5 minutes to align, 20 minutes each to practise, then 15 minutes of specific feedback.',225:'Deeper version: add source checks, a second interview or chart revisions. Spend the extra time improving evidence quality.'},
  planOutput:['Read the case; bring a structure or estimate.','Take turns explaining, challenging and giving feedback.','Finish an issue tree, comparison table or recommendation slide.','Verify a role or improve one application paragraph.'],
  invalidMeeting:'Choose a valid date and time in Hong Kong.',cities:['HKU · Hong Kong','HEC Paris · Paris','Bocconi · Milan'],
  storage:'Progress and notes stay in this browser; they do not sync to your partner.',temporary:'This browser does not allow storage; progress and notes last only for this visit.',
  start:'Start',pause:'Pause',resume:'Resume',ready:'Read the prompt before starting.',running:'Running. Explain the structure, calculation and recommendation.',paused:'Paused. Collect your thoughts, then continue.',finished:'Time is up. Take two minutes to identify the most useful improvement.',
  notebook:'YOUR WORKING NOTES',notesLabel:'Structure, calculation & recommendation',placeholder:'Objective and constraints:\nStructure:\nKey calculation, with units:\nRecommendation and evidence:\nWhat would change the answer:\nPartner feedback:',export:'Download this week’s notes',complete:'Mark this week complete',incomplete:'Completed · undo',saved:'Notes saved in this browser.',downloaded:'This week’s notes exported as a Markdown file.',
  research:{
    interview:{title:'Six questions about one real experience.',items:['When did you last transfer money for living expenses?','What were you trying to do, and which steps did you take?','What alternatives did you consider, and why choose this one?','What was confusing, expensive or inconvenient?','What would make you consider a different method?','What makes you trust or distrust a provider?'],output:'Anonymised experiences, quote permissions and themes; not a population adoption estimate.'},
    compare:{title:'Fix the scenario before comparing products.',items:['Use the same origin, destination, amount, currencies and receiving method.','On the same day, record total cost, exchange-rate basis, expected arrival and restrictions.','Attach a public source, checked date and conditions to each number.','Separate price facts from your judgement of convenience.'],output:'A 4–6-product table: scenario / cost / time / conditions / source / date.'},
    deck:{title:'Answer first. Make the reasoning inspectable.',items:['Slides 1–3: question, recommendation, method and limitations.','Slides 4–6: observed user behaviour, differences and alternatives.','Slides 7–9: economics, option comparison and proposed experiment.','Slides 10–12: risks, contributions, sources and calculation appendix.'],output:'10–12 readable slides. Remove unsupported claims or explicitly label them as assumptions.'}
  },
  career:{
    consulting:{title:'Consulting: make your reasoning challengeable.',items:['Practise structure, estimation, profitability and concise recommendations.','Prepare two truthful fit stories about your actions and revisions.','Verify eligibility, then practise the target firm’s official format.'],output:'One 25-minute mock, one feedback sheet and two two-minute stories.',next:'Pick a real role and verify year, language, location and deadline.'},
    strategy:{title:'Corporate strategy: show how you support a choice.',items:['Compare customers, markets or channels against explicit criteria.','Turn the analysis into action: who should do what, and what to test first?','Use the deck to explain evidence, trade-offs, risks and a feasible next step.'],output:'An executive summary, options slide and proposed pilot.',next:'Read the target company’s business and job description; identify one concrete decision it cares about.'},
    fintech:{title:'Fintech: connect user problems to the model.',items:['Understand payments, fees, trust and usage friction first.','Explain the revenue model, unit economics and key business metrics.','Verify institutional and product constraints; do not guess at rules.'],output:'A product comparison, simple model and user-problem experiment brief.',next:'Shortlist product, business analysis or strategy roles and check their actual skill requirements.'}
  }
};
const planAllocations = {90:[20,40,30,0],180:[45,60,60,15],225:[45,60,90,30]};
function normaliseProgress(value) {
  return Array.isArray(value) ? [...new Set(value.filter(n => Number.isInteger(n) && n >= 1 && n <= 8))] : [];
}
function parseHKMeeting(value) {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) return null;
  const date = new Date(`${value}:00+08:00`);
  if (Number.isNaN(date.getTime())) return null;
  const parts = new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Hong_Kong',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date).replace(' ','T');
  return parts === value ? date : null;
}
function remainingSeconds(endsAt,now) { return Math.max(0,Math.ceil((endsAt-now)/1000)); }
const visitStore = new Map();
let storageWorks = true;
function readLocal(key,fallback) {
  try { return localStorage.getItem(key) ?? visitStore.get(key) ?? fallback; }
  catch { storageWorks=false; return visitStore.get(key) ?? fallback; }
}
function writeLocal(key,value) {
  visitStore.set(key,value);
  try { localStorage.setItem(key,value); } catch { storageWorks=false; }
  const notice=document.getElementById('storage-note');
  if (notice) notice.textContent=storageWorks ? labCopy.storage : labCopy.temporary;
}
let completed=[];
try { completed=normaliseProgress(JSON.parse(readLocal('meridian-progress-v1','[]'))); } catch { completed=[]; }
function renderInfo(item) {
  return `<h3>${item.title}</h3>${item.body ? `<p>${item.body}</p>` : ''}<ol>${item.items.map(text=>`<li>${text}</li>`).join('')}</ol><div class="output-note"><strong>${labCopy.output}</strong><p>${item.output}</p></div>${item.next ? `<p class="next-action"><strong>${labCopy.next}</strong> ${item.next}</p>` : ''}${item.link ? `<a class="text-link" href="${item.link}">${item.linkText} →</a>` : ''}`;
}
function bindChoices(id,initial,render) {
  const group=document.getElementById(id);
  if (!group) return;
  const select=key=>{
    for(const button of group.querySelectorAll('button')) button.setAttribute('aria-pressed',String(button.dataset.choice===key));
    render(key);
  };
  group.addEventListener('click',event=>{
    const button=event.target.closest('button[data-choice]');
    if (button && group.contains(button)) select(button.dataset.choice);
  });
  select(initial);
}
bindChoices('campus-choices','hku',key=>{document.getElementById('campus-output').innerHTML=renderInfo(labCopy.campus[key]);});
document.getElementById('campus-output')?.addEventListener('click',event=>{
  const link=event.target.closest('a');
  const match=link && /^#week-([1-8])$/.exec(link.getAttribute('href'));
  if(match && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey){event.preventDefault();navigateWeek(Number(match[1]),true);}
});
bindChoices('research-choices','interview',key=>{document.getElementById('research-output').innerHTML=renderInfo(labCopy.research[key]);});
bindChoices('career-choices','consulting',key=>{document.getElementById('career-output').innerHTML=renderInfo(labCopy.career[key]);});
bindChoices('plan-choices','180',key=>{
  const times=planAllocations[key];
  document.getElementById('plan-output').innerHTML=`<ol class="plan-phases">${times.map((time,i)=>`<li><div><strong>${labCopy.planNames[i]}</strong><p>${time ? labCopy.planOutput[i] : (labChinese?'有紧急截止日期时优先申请；本周最低计划未分配职业准备时间。':'Prioritise an urgent deadline; the minimum study plan allocates no career time.')}</p></div><span>${time} ${labCopy.minute}</span></li>`).join('')}</ol><p class="tool-note">${labCopy.planTips[key]}</p>`;
});
const meetingInput=document.getElementById('meeting-time');
function convertMeeting() {
  const output=document.getElementById('meeting-output');
  const date=parseHKMeeting(meetingInput.value);
  if (!date) { output.textContent=labCopy.invalidMeeting; return; }
  const zones=['Asia/Hong_Kong','Europe/Paris','Europe/Rome'];
  output.innerHTML=zones.map((zone,i)=>`<div><strong>${labCopy.cities[i]}</strong><span>${new Intl.DateTimeFormat(labChinese?'zh-CN':'en-GB',{timeZone:zone,month:'short',day:'numeric',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date)}</span></div>`).join('');
}
if (meetingInput) {
  const today=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Hong_Kong',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  meetingInput.value=`${today}T20:00`;
  document.getElementById('convert-meeting').addEventListener('click',convertMeeting);
  meetingInput.addEventListener('change',convertMeeting);
  convertMeeting();
}
function updateProgress() {
  const bar=document.getElementById('lab-progress');
  if (bar) bar.value=completed.length;
  const count=document.getElementById('progress-count');
  if (count) count.textContent=`${completed.length} / 8`;
  for (const link of document.querySelectorAll('.week-link')) {
    const done=completed.includes(Number(link.getAttribute('href').slice(6)));
    link.classList.toggle('completed',done);
    const dot=link.querySelector('.week-dot');
    if(dot) {dot.textContent=done?'✓':'';dot.title=done?(labChinese?'本周已完成':'Week completed'):'';}
  }
}
function mountWeek(number) {
  const session=document.getElementById('session');
  if (!session || document.getElementById('week-notebook')) return;
  const key=`meridian-notes-week-${number}-v1`;
  session.insertAdjacentHTML('beforeend',`<section class="week-notebook" id="week-notebook" aria-labelledby="notebook-label"><p class="tiny-label">${labCopy.notebook}</p><label id="notebook-label" for="case-notes">${labCopy.notesLabel}</label><textarea id="case-notes" rows="6" maxlength="5000"></textarea><div class="notebook-actions"><button type="button" class="button secondary" id="export-notes">${labCopy.export}</button><button type="button" class="button" id="complete-week" aria-pressed="${completed.includes(number)}">${completed.includes(number)?labCopy.incomplete:labCopy.complete}</button></div><p class="tool-note" id="notes-status" aria-live="polite">${storageWorks?labCopy.storage:labCopy.temporary}</p></section>`);
  const notes=document.getElementById('case-notes');
  notes.placeholder=labCopy.placeholder;
  notes.value=readLocal(key,'').slice(0,5000);
  notes.addEventListener('input',()=>{
    writeLocal(key,notes.value);
    document.getElementById('notes-status').textContent=storageWorks?labCopy.saved:labCopy.temporary;
  });
  document.getElementById('export-notes').addEventListener('click',()=>{
    const title=document.getElementById('session-title').textContent;
    const content=`# Meridian · ${labChinese?'第':'Week'} ${String(number).padStart(2,'0')} · ${title}\n\nHKU × HEC Paris × Bocconi\n\n${notes.value}\n`;
    const url=URL.createObjectURL(new Blob([content],{type:'text/markdown;charset=utf-8'}));
    const anchor=document.createElement('a');
    anchor.href=url;anchor.download=`meridian-week-${number}-notes.md`;
    document.body.append(anchor);anchor.click();anchor.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
    document.getElementById('notes-status').textContent=labCopy.downloaded;
  });
  document.getElementById('complete-week').addEventListener('click',event=>{
    completed=completed.includes(number)?completed.filter(n=>n!==number):[...completed,number];
    writeLocal('meridian-progress-v1',JSON.stringify(completed));
    event.currentTarget.textContent=completed.includes(number)?labCopy.incomplete:labCopy.complete;
    event.currentTarget.setAttribute('aria-pressed',String(completed.includes(number)));
    updateProgress();
  });
  updateProgress();
}
window.meridianLab={mountWeek};
const initialWeek=/^#week-([1-8])$/.exec(location.hash);
mountWeek(initialWeek?Number(initialWeek[1]):1);
updateProgress();
const storageNotice=document.getElementById('storage-note');
if(storageNotice) storageNotice.textContent=storageWorks?labCopy.storage:labCopy.temporary;
const timerDuration=document.getElementById('timer-duration');
if (timerDuration) {
  let seconds=Number(timerDuration.value)*60;
  let endsAt=0;
  let interval=null;
  const clock=document.getElementById('timer-clock');
  const toggle=document.getElementById('timer-toggle');
  const status=document.getElementById('timer-status');
  const show=()=>{clock.value=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;};
  const stop=()=>{if(interval)clearInterval(interval);interval=null;};
  const reset=()=>{stop();seconds=Number(timerDuration.value)*60;toggle.textContent=labCopy.start;status.textContent=labCopy.ready;show();};
  const tick=()=>{
    seconds=remainingSeconds(endsAt,Date.now());show();
    if(seconds===0){stop();toggle.textContent=labCopy.start;status.textContent=labCopy.finished;}
  };
  toggle.addEventListener('click',()=>{
    if(interval){seconds=remainingSeconds(endsAt,Date.now());stop();toggle.textContent=labCopy.resume;status.textContent=labCopy.paused;show();return;}
    if(seconds===0)seconds=Number(timerDuration.value)*60;
    endsAt=Date.now()+seconds*1000;interval=setInterval(tick,1000);
    toggle.textContent=labCopy.pause;status.textContent=labCopy.running;show();
  });
  timerDuration.addEventListener('change',reset);
  document.getElementById('timer-reset').addEventListener('click',reset);
  show();
}
