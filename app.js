// All numerical cases are invented for practice; they are not company findings.
const isChinese = document.documentElement.lang === 'zh-CN';
const englishWeeks = [
  {
    title:'Structure the problem', subtitle:'Questions before frameworks',
    description:'Turn a broad business question into a decision you can investigate. A framework earns its place only if it helps answer that question.',
    prepTitle:'Bring a one-page issue tree.',
    prep:'Read the case below. Define the decision, the success measure and three useful branches. Write what evidence would change your mind.',
    togetherTitle:'Take turns. Then compare.',
    together:'5 min: align on the objective. 20 min each: explain and challenge an issue tree. 15 min: give specific feedback. Swap who leads next week.',
    output:'A one-page problem statement and an issue tree for your shared research project.',
    career:'Build a shortlist of five real roles. Record eligibility, location, language and the official deadline. Apply earlier if a suitable role is already open.',
    caseTitle:'A café is busy. Profit is falling.',
    prompt:'Revenue is unchanged, but monthly operating profit has fallen from €12,000 to €6,000. The owner wants to restore profit without increasing prices. What would you investigate first?',
    answer:'Start with the objective and period: restore €6,000 of monthly profit, by when, and with what service constraints? With unchanged total revenue, total operating costs have risen by €6,000. Split costs into ingredients, labour and other operating costs; then examine price versus quantity drivers. Revenue being flat does not mean product mix or order volume is unchanged. Ask for cost and product-mix data before recommending a solution.',
    feedback:['Did the candidate clarify the decision and constraints?', 'Do the branches explain this problem, rather than reproduce a memorised framework?', 'Did the candidate prioritise one useful next piece of evidence?'],
    project:'Agree one research question, the target users and what decision the final deck should support.'
  },
  {
    title:'Size a market', subtitle:'Assumptions you can defend',
    description:'Build a transparent estimate from a small number of meaningful assumptions. Check the units, then explain what the number can and cannot tell you.',
    prepTitle:'Make two estimates.',
    prep:'Spend 20 minutes on a top-down estimate and 20 minutes on a bottom-up estimate. Use the final 5 minutes to identify the weakest assumption.',
    togetherTitle:'Estimate out loud.',
    together:'5 min: agree the market definition. 20 min each: build and defend an estimate. 15 min: compare assumptions, units and sensitivity.',
    output:'One sizing slide with a base case, a range and a labelled assumption table.',
    career:'Compare your shortlist with your current skills. Pick one concrete gap to address; check rolling recruitment instead of waiting for the end of the programme.',
    caseTitle:'How much is actually addressable?',
    prompt:'Assume 30,000 international students in a hypothetical city. 60% transfer money internationally, 8 times per year. A product could earn €3 of revenue per transfer. Estimate annual category revenue, then revenue at a 5% share of transfer volume.',
    answer:'30,000 × 60% × 8 = 144,000 transfers a year. At €3 per transfer, annual category revenue is €432,000. A 5% volume share implies €21,600 in revenue at the same unit revenue. This is revenue, not the value of money transferred, profit or a forecast. Vary transfer frequency from 6 to 10: category revenue becomes €324,000–€540,000. The student count, adoption and unit revenue are all practice assumptions requiring evidence in a real project.',
    feedback:['Was the market defined before calculating?', 'Are users, transactions, transfer value and revenue kept separate?', 'Was the estimate sanity-checked and its weakest assumption identified?'],
    project:'Set the geographic scope. Create an evidence table and an interview guide; begin recruiting adult participants with their consent.'
  },
  {
    title:'Understand profitability', subtitle:'Follow the unit economics',
    description:'Connect an operational change to its financial effect. Separate revenue, contribution and profit, and identify the assumptions behind a recommendation.',
    prepTitle:'Build a simple profit bridge.',
    prep:'Write revenue = price × volume and profit = revenue − costs. Solve the case in a spreadsheet, making every assumption visible.',
    togetherTitle:'Explain the economics.',
    together:'5 min: clarify the objective. 20 min each: calculate, interpret and defend. 15 min: check formulae and discuss what the numbers omit.',
    output:'A simple unit-economics sheet and one slide explaining the most important profit driver.',
    career:'Prepare three questions for a practitioner or alumnus about their actual work and recruiting process. Reach out individually where you have a relevant connection.',
    caseTitle:'Should a subscription app cut its price?',
    prompt:'A fictional app has 1,000 paying users at €10 per month, variable cost of €2 per user and fixed costs of €5,000 per month. It proposes €9 pricing and expects 20% more users. Calculate profit before and after. What user count preserves the original profit?',
    answer:'Current profit: 1,000 × (€10 − €2) − €5,000 = €3,000/month. Proposed profit: 1,200 × (€9 − €2) − €5,000 = €3,400/month. To preserve €3,000: users × €7 − €5,000 = €3,000, so at least 1,143 whole users are needed. The forecast only works under constant variable cost per user and fixed costs, with no added acquisition cost. Test the 20% demand response before rolling out.',
    feedback:['Were contribution and profit distinguished?', 'Was the threshold calculated with the right units?', 'Were acquisition cost and the uncertain demand response considered?'],
    project:'Conduct the first interviews. Record observed pain points, anonymised quotes with permission, and plausible economic drivers.'
  },
  {
    title:'Read customers & competition', subtitle:'Evidence before opinions',
    description:'Distinguish what users say, what they actually do and what your sample allows you to infer. Compare alternatives on the same basis.',
    prepTitle:'Practise a neutral interview.',
    prep:'Write five questions about a recent real experience. Remove leading phrasing. Build a comparison table for 4–6 products using dated public sources.',
    togetherTitle:'Interview, then challenge.',
    together:'5 min: set the learning goal. 20 min each: practise interviewing and synthesising. 15 min: identify bias and agree which claims need more evidence.',
    output:'An anonymised theme summary and a competitor table with consistent comparison criteria.',
    career:'Ask a willing peer for a case review. Revise one CV bullet around what you actually did, the method and the evidence—without inventing commercial impact.',
    caseTitle:'Does “everyone wants it” hold up?',
    prompt:'You interviewed 10 friends. Eight say they would try a cheaper transfer app, but only two have switched providers in the past year. Can you conclude that 80% of international students will adopt the product?',
    answer:'No. These are 10 convenience-sampled friends and a statement of intent, not a representative adoption estimate. The two previous switchers offer behavioural evidence, but still do not establish future adoption. Ask about the last transfer, costs, switching friction, trust and current alternatives. Seek contrasting users beyond friends and test a concrete proposition with informed consent. Report “8 of 10 interviewees expressed interest,” not an 80% market adoption forecast.',
    feedback:['Were intent and behaviour distinguished?', 'Was selection bias made explicit?', 'Was a practical next test proposed instead of an unsupported percentage?'],
    project:'Complete most interviews and product comparisons. Hold a midpoint review: keep, narrow or change the question based on what you have learned.'
  },
  {
    title:'Choose a market', subtitle:'Trade-offs, not wish lists',
    description:'Compare a small number of strategic options against an explicit objective. Use numbers to expose trade-offs and institutions to understand constraints.',
    prepTitle:'Compare two credible options.',
    prep:'Define three decision criteria and explain why they matter. Solve the case, then list the assumptions that could reverse your choice.',
    togetherTitle:'Recommend under uncertainty.',
    together:'5 min: define the objective. 20 min each: compare options and recommend. 15 min: challenge the recommendation with one changed assumption.',
    output:'An options slide with a recommendation, an alternative and a clear condition for changing your mind.',
    career:'Tailor one application to a verified opening. Connect your examples to the role’s actual work; confirm language, year of study and availability requirements.',
    caseTitle:'Market A or market B?',
    prompt:'Over one year, A offers 20,000 reachable users, 4% expected conversion, €25 contribution per acquired user and €12,000 launch cost. B offers 8,000 users, 8% conversion, €35 contribution and €9,000 launch cost. Which has greater first-year net contribution after launch costs?',
    answer:'A: 20,000 × 4% × €25 − €12,000 = €8,000. B: 8,000 × 8% × €35 − €9,000 = €13,400. B wins under these assumptions, despite the smaller audience. Holding all else fixed, B needs conversion above about 6.07% to beat A’s €8,000 result. This is net contribution after the stated launch costs, not total accounting profit. Verify feasibility, conversion evidence, ongoing costs and relevant regulatory constraints before choosing.',
    feedback:['Was reach distinguished from conversion?', 'Did the recommendation follow the stated objective?', 'Were feasibility and a reversal threshold considered?'],
    project:'Choose two or three product or customer options. Explain how institutional or regulatory factors could change the commercial judgement.'
  },
  {
    title:'Turn data into an insight', subtitle:'Get the denominator right',
    description:'Use a small table or chart to support one decision. Check definitions, comparisons and missing information before claiming a pattern.',
    prepTitle:'Build one honest chart.',
    prep:'Use a spreadsheet to calculate the case. Choose a chart that answers a specific question. Label units, period, sample and source.',
    togetherTitle:'Read, calculate, explain.',
    together:'5 min: clarify the metric. 20 min each: interpret the data and draw a conclusion. 15 min: check the denominator and identify an alternative explanation.',
    output:'One decision-focused chart with a takeaway title, source and limitation.',
    career:'Practise a two-minute project story: question, your contribution, evidence, recommendation and limitations. Ask your partner to challenge one claim.',
    caseTitle:'Growth—or a better-looking total?',
    prompt:'Channel A generates 100 sign-ups from 1,000 visits at a cost of €2,000. Channel B generates 300 sign-ups from 6,000 visits at a cost of €3,000. Compare conversion and cost per sign-up. Which channel should receive more budget?',
    answer:'A converts 10% with a €20 cost per sign-up. B converts 5% with a €10 cost per sign-up. B currently acquires sign-ups more cheaply, while A converts a larger share of visits. These figures alone do not settle the budget decision: compare paying-customer conversion, retention, contribution and marginal performance as spend increases. A sign-up is not necessarily a customer. Recommend a bounded test and measure customer-level economics.',
    feedback:['Were the two metrics calculated correctly?', 'Was sign-up cost kept distinct from customer acquisition cost?', 'Was the recommendation appropriately limited by the missing data?'],
    project:'Audit sources and calculations. Build only the charts that help compare options; label interview findings as qualitative and exploratory.'
  },
  {
    title:'Make the recommendation', subtitle:'Answer first. Show why.',
    description:'Turn analysis into a clear decision. A strong recommendation makes its evidence, trade-offs and next steps easy to challenge.',
    prepTitle:'Write the executive summary.',
    prep:'Write one sentence answering the research question, then two supporting reasons, one material risk and a practical next step.',
    togetherTitle:'Present and edit.',
    together:'5 min: set the audience. 20 min each: present a recommendation and take questions. 15 min: remove weak claims and rewrite slide titles.',
    output:'A draft 10–12-slide research deck with a one-page executive summary and source appendix.',
    career:'Prepare two fit-interview stories grounded in actual experience. Be precise about your contribution and what changed after feedback; do not invent outcomes.',
    caseTitle:'Recommend a pilot without overselling it.',
    prompt:'Assume your research shows recurring confusion about transfer fees, limited evidence that users will switch apps, and a feasible way to test clearer fee information. Give a 60-second recommendation to the product team.',
    answer:'A defensible answer: “Test a clearer fee-comparison experience with a small user group before building a new transfer app. Our exploratory interviews suggest fee confusion, but they do not establish switching demand. Use the pilot to test whether users understand total cost better and take a meaningful next action. Define success and a stop condition before running it. If comprehension improves but behaviour does not, revisit the value proposition.” Do not invent pilot results or a statistically justified sample size.',
    feedback:['Was there a clear answer in the first sentence?', 'Did the recommendation match the strength of the evidence?', 'Were the next step and a stop or revision condition explicit?'],
    project:'Assemble the full deck. Cross-review every important source, number and claim; credit both partners’ actual contributions.'
  },
  {
    title:'Defend your work', subtitle:'Mock interview & reflection',
    description:'Bring the toolkit together under time pressure. Evaluate your reasoning and communication, then choose the next skill to improve.',
    prepTitle:'Revisit the weak points.',
    prep:'Read your feedback from earlier weeks. Pick one structuring weakness and one communication weakness. Finalise the deck and rehearse a two-minute project story.',
    togetherTitle:'Run two complete mocks.',
    together:'25 min each: one integrated case with interruptions and follow-up questions. 10 min: score against the same rubric and choose a priority for the next cycle.',
    output:'A defensible research deck, a truthful portfolio summary and a short improvement plan for the next four weeks.',
    career:'Review applications and interview feedback. Keep applying to suitable openings; select the next practice cycle based on observed weaknesses, not extra titles.',
    caseTitle:'Should the fintech team run this pilot?',
    prompt:'A hypothetical pilot targets 2,000 reachable users; 10% are expected to become paying users, each contributing €40 over the first year before acquisition. Acquisition costs €15 per paying user. Fixed pilot cost is €4,000. Estimate the result, break-even conversion and your recommendation.',
    answer:'Expected paying users: 200. Net contribution after acquisition per user: €40 − €15 = €25. Expected result after fixed pilot cost: 200 × €25 − €4,000 = €1,000. Break-even is 160 paying users, or 8% conversion. At 6%, the result is −€1,000; at 14%, it is €3,000, assuming unchanged unit economics. A pilot may be sensible if the team can afford the downside and its purpose is to test the uncertain conversion and contribution assumptions. The forecast is not evidence that those assumptions will hold.',
    feedback:['Was the decision structured before the calculation?', 'Were unit economics, break-even and uncertainty handled correctly?', 'Could the candidate give a concise recommendation and respond to a challenge?'],
    project:'Present the final research, check consent before publishing, and label it independent research. Record what the work changed in your thinking, even if the answer is “do not pursue”.'
  }
];

const weeks = isChinese ? chineseWeeks : englishWeeks;
const ui = isChinese ? {"session": "60 分钟双人练习", "before": "见面之前 · 45 分钟", "during": "一起练习 · 60 分钟", "output": "本周产出", "practice": "练习案例", "fictional": "虚构练习案例", "answer": "先讨论，再查看参考答案", "feedback": "如何给出有效反馈", "feedbackNote": "每一项都指出：搭档做得好的一点、一个具体改进，以及一次重新练习的机会。评价标准：尚未掌握 / 逐步掌握 / 清晰且能独立完成。", "actions": "研究与实习行动", "research": "研究：", "internships": "实习：", "download": "下载中文学习模板", "kit": "study-kit-zh.md", "finish": "复盘、改进，再开始下一轮练习。"} : {"session": "60-minute partner session", "before": "BEFORE YOU MEET · 45 MIN", "during": "TOGETHER · 60 MIN", "output": "THIS WEEK’S OUTPUT", "practice": "THE PRACTICE CASE", "fictional": "Fictional exercise", "answer": "Discuss first. Then read the answer.", "feedback": "What good feedback sounds like", "feedbackNote": "For each point, name one thing your partner did well, one concrete improvement and one retry. Use: not yet / developing / clear and independent.", "actions": "Research & internship actions", "research": "Research:", "internships": "Internships:", "download": "Download working templates", "kit": "study-kit.md", "finish": "Review. Refine. Start the next cycle."};

const list = document.getElementById('week-list');
const session = document.getElementById('session');
const pad = value => String(value).padStart(2, '0');
const weekLabel = number => isChinese ? `第 ${pad(number)} 周` : `Week ${pad(number)}`;
const languageLink = document.querySelector('[data-language-link]');
languageLink?.addEventListener('click', () => { languageLink.hash = location.hash; });

function renderWeek(number) {
  if (!Number.isInteger(number) || number < 1 || number > weeks.length) return false;
  const w = weeks[number - 1];
  for (const link of list.querySelectorAll('a')) {
    const active = link.hash === `#week-${number}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'step');
    else link.removeAttribute('aria-current');
  }
  session.innerHTML = `
    <div class="session-top"><span class="pill">${weekLabel(number).toUpperCase()}</span><span class="quiet">${ui.session}</span></div>
    <h3 id="session-title">${w.title}${isChinese ? '。' : '.'}</h3><p class="session-description">${w.description}</p>
    <div class="session-blocks"><div><span class="tiny-label">${ui.before}</span><h4>${w.prepTitle}</h4><p>${w.prep}</p></div><div><span class="tiny-label">${ui.during}</span><h4>${w.togetherTitle}</h4><p>${w.together}</p></div></div>
    <div class="deliverable"><span class="deliverable-label">${ui.output}</span><p>${w.output}</p></div>
    <div class="case"><div class="case-top"><span class="case-label">${ui.practice}</span><span class="case-tag">${ui.fictional}</span></div><h4>${w.caseTitle}</h4><p class="case-prompt">${w.prompt}</p>
    <details><summary>${ui.answer}</summary><div class="detail-body"><p>${w.answer}</p></div></details>
    <details><summary>${ui.feedback}</summary><div class="detail-body"><ul>${w.feedback.map(item => `<li>${item}</li>`).join('')}</ul><p>${ui.feedbackNote}</p></div></details>
    <details><summary>${ui.actions}</summary><div class="detail-body"><p><strong>${ui.research}</strong> ${w.project}</p><p><strong>${ui.internships}</strong> ${w.career}</p></div></details></div>
    <div class="session-bottom"><a class="button" href="${ui.kit}" download>${ui.download}</a>${number < 8 ? `<button class="button secondary" type="button" id="next-week">${weekLabel(number + 1)}</button>` : `<span class="quiet">${ui.finish}</span>`}</div>`;
  document.getElementById('next-week')?.addEventListener('click', () => navigateWeek(number + 1, true));
  return true;
}

function navigateWeek(number, focus = false) {
  if (!renderWeek(number)) return;
  if (location.hash !== `#week-${number}`) history.pushState(null, '', `#week-${number}`);
  if (focus) {
    const title = document.getElementById('session-title');
    title.tabIndex = -1;
    title.focus({ preventScroll: true });
    session.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start' });
  }
}

list.innerHTML = weeks.map((w, i) => `<a class="week-link" href="#week-${i + 1}"><span class="week-number">${pad(i + 1)}</span><span>${w.title}<small>${w.subtitle}</small></span><span class="week-dot" aria-hidden="true"></span></a>`).join('');
list.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  navigateWeek(Number(link.hash.slice(6)), true);
});
function readHash() {
  const match = /^#week-([1-8])$/.exec(location.hash);
  if (match) renderWeek(Number(match[1]));
}
renderWeek(1);
readHash();
window.addEventListener('hashchange', readHash);
window.addEventListener('popstate', readHash);
