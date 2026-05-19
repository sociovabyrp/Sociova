/* ═══════════════════════════════════════════════════════════
   SOCIOVA — content.js
   ═══════════════════════════════════════════════════════════
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD CONTENT.

   HOW TO ADD A NEW TOPIC:
   1. Find the subject (geo, hist, civic, eco)
   2. Copy any existing topic object and paste it
   3. Change the values — name, class, types
   4. Save the file. Done.

   HOW TO ADD A NEW INFOGRAPHIC:
   1. Scroll to INFOGRAPHICS section below
   2. Copy any existing infographic object and paste it
   3. Fill in the details
   4. Save the file. Done.

   RESOURCE TYPES you can use in topics:
   'Notes' | 'Map' | 'Timeline' | 'Flowchart' |
   'Diagram' | 'Infographic' | 'PYQ' | 'Graph' | 'Summary'
═══════════════════════════════════════════════════════════ */

// ── SUBJECTS ──────────────────────────────────────────────
const SUBJECTS = [
  {
    key: 'geo',
    emoji: '🌍',
    name: 'Geography',
    colorClass: 'geo',
    color: 'var(--geo)',
    colorL: 'var(--geo-l)',
    colorD: 'var(--geo-d)',
    sub: 'Class 9 to 12 — Physical, Human & Indian Geography',
    tags: ['Notes', 'Maps', 'PYQs'],
    tagColors: [
      { bg: 'var(--geo-l)',  fg: 'var(--geo-d)'  },
      { bg: 'var(--eco-l)',  fg: 'var(--eco-d)'  },
      { bg: 'var(--soft)',   fg: 'var(--muted)'  },
    ],
    chips: ['Physical Geography','Human Geography','Map Work','Climate','Resources','Landforms'],
    counts: { notes: 12, books: 4, infographics: 8, pyqs: 6 },
    topics: [
      { num:'01', name:'India — Size & Location',         cl:'9',  types:['Notes','Map'] },
      { num:'02', name:'Physical Features of India',      cl:'9',  types:['Notes','Diagram','PYQ'] },
      { num:'03', name:'Drainage Systems',                cl:'9',  types:['Notes','Map','PYQ'] },
      { num:'04', name:'Climate of India',                cl:'9',  types:['Notes','Infographic'] },
      { num:'05', name:'Natural Vegetation & Wildlife',   cl:'9',  types:['Notes','Map'] },
      { num:'06', name:'Population',                      cl:'9',  types:['Notes','Graph','PYQ'] },
      { num:'07', name:'Agriculture in India',            cl:'10', types:['Notes','Map','PYQ'] },
      { num:'08', name:'Forest & Wildlife Resources',     cl:'10', types:['Notes','Infographic'] },
      { num:'09', name:'Water Resources',                 cl:'10', types:['Notes','Map','PYQ'] },
      { num:'10', name:'Minerals & Energy Resources',     cl:'10', types:['Notes','Map','PYQ'] },
      { num:'11', name:'Manufacturing Industries',        cl:'10', types:['Notes','Diagram'] },
      { num:'12', name:'Lifelines of National Economy',   cl:'10', types:['Notes','Map','PYQ'] },
      // ── ADD CLASS 11 & 12 TOPICS BELOW ──
      // { num:'13', name:'Your Topic Name', cl:'11', types:['Notes','PYQ'] },
    ]
  },
  {
    key: 'hist',
    emoji: '🏛️',
    name: 'History',
    colorClass: 'hist',
    color: 'var(--hist)',
    colorL: 'var(--hist-l)',
    colorD: 'var(--hist-d)',
    sub: 'Class 9 to 12 — Modern World & Indian History',
    tags: ['Notes', 'Timelines', 'PYQs'],
    tagColors: [
      { bg: 'var(--hist-l)', fg: 'var(--hist-d)' },
      { bg: 'var(--eco-l)',  fg: 'var(--eco-d)'  },
      { bg: 'var(--soft)',   fg: 'var(--muted)'  },
    ],
    chips: ['Modern India','World History','Nationalism','Social Movements','Colonialism'],
    counts: { notes: 10, books: 4, infographics: 6, pyqs: 10 },
    topics: [
      { num:'01', name:'The French Revolution',                   cl:'9',  types:['Notes','Timeline','PYQ'] },
      { num:'02', name:'Socialism in Europe & Russian Revolution', cl:'9',  types:['Notes','Timeline'] },
      { num:'03', name:'Nazism & Rise of Hitler',                 cl:'9',  types:['Notes','PYQ'] },
      { num:'04', name:'Forest Society & Colonialism',            cl:'9',  types:['Notes'] },
      { num:'05', name:'Pastoralists in the Modern World',        cl:'9',  types:['Notes','Map'] },
      { num:'06', name:'The Rise of Nationalism in Europe',       cl:'10', types:['Notes','Timeline','PYQ'] },
      { num:'07', name:'Nationalism in India',                    cl:'10', types:['Notes','Timeline','PYQ'] },
      { num:'08', name:'The Making of a Global World',            cl:'10', types:['Notes','PYQ'] },
      { num:'09', name:'The Age of Industrialization',            cl:'10', types:['Notes','Diagram','PYQ'] },
      { num:'10', name:'Print Culture & the Modern World',        cl:'10', types:['Notes','PYQ'] },
      // ── ADD MORE TOPICS BELOW ──
    ]
  },
  {
    key: 'civic',
    emoji: '⚖️',
    name: 'Civics & Political Science',
    colorClass: 'civic',
    color: 'var(--civic)',
    colorL: 'var(--civic-l)',
    colorD: 'var(--civic-d)',
    sub: 'Class 9 to 12 — Constitution, Democracy & Governance',
    tags: ['Notes', 'Flowcharts', 'PYQs'],
    tagColors: [
      { bg: 'var(--civic-l)', fg: 'var(--civic-d)' },
      { bg: 'var(--geo-l)',   fg: 'var(--geo-d)'   },
      { bg: 'var(--soft)',    fg: 'var(--muted)'   },
    ],
    chips: ['Constitution','Democracy','Federalism','Elections','Rights & Duties','Parliament'],
    counts: { notes: 10, books: 3, infographics: 7, pyqs: 10 },
    topics: [
      { num:'01', name:'What is Democracy? Why Democracy?',  cl:'9',  types:['Notes','PYQ'] },
      { num:'02', name:'Constitutional Design',              cl:'9',  types:['Notes','Flowchart','PYQ'] },
      { num:'03', name:'Electoral Politics',                 cl:'9',  types:['Notes','Diagram'] },
      { num:'04', name:'Working of Institutions',            cl:'9',  types:['Notes','Flowchart','PYQ'] },
      { num:'05', name:'Democratic Rights',                  cl:'9',  types:['Notes','PYQ'] },
      { num:'06', name:'Power Sharing',                      cl:'10', types:['Notes','PYQ'] },
      { num:'07', name:'Federalism in India',                cl:'10', types:['Notes','Diagram','PYQ'] },
      { num:'08', name:'Gender, Religion & Caste',           cl:'10', types:['Notes','PYQ'] },
      { num:'09', name:'Political Parties',                  cl:'10', types:['Notes','PYQ'] },
      { num:'10', name:'Outcomes of Democracy',              cl:'10', types:['Notes','Infographic','PYQ'] },
      // ── ADD MORE TOPICS BELOW ──
    ]
  },
  {
    key: 'eco',
    emoji: '📊',
    name: 'Economics',
    colorClass: 'eco',
    color: 'var(--eco)',
    colorL: 'var(--eco-l)',
    colorD: 'var(--eco-d)',
    sub: 'Class 9 to 12 — Development, Markets & Indian Economy',
    tags: ['Notes', 'Graphs', 'PYQs'],
    tagColors: [
      { bg: 'var(--eco-l)',  fg: 'var(--eco-d)'  },
      { bg: 'var(--hist-l)', fg: 'var(--hist-d)' },
      { bg: 'var(--soft)',   fg: 'var(--muted)'  },
    ],
    chips: ['Development','Markets','Money & Banking','Globalization','Indian Economy','HDI'],
    counts: { notes: 9, books: 3, infographics: 5, pyqs: 9 },
    topics: [
      { num:'01', name:'The Story of Village Palampur',     cl:'9',  types:['Notes','PYQ'] },
      { num:'02', name:'People as Resource',                cl:'9',  types:['Notes','Graph'] },
      { num:'03', name:'Poverty as a Challenge',            cl:'9',  types:['Notes','Infographic','PYQ'] },
      { num:'04', name:'Food Security in India',            cl:'9',  types:['Notes','PYQ'] },
      { num:'05', name:'Development',                       cl:'10', types:['Notes','Graph','PYQ'] },
      { num:'06', name:'Sectors of the Indian Economy',     cl:'10', types:['Notes','Infographic','PYQ'] },
      { num:'07', name:'Money and Credit',                  cl:'10', types:['Notes','Flowchart','PYQ'] },
      { num:'08', name:'Globalisation & Indian Economy',    cl:'10', types:['Notes','PYQ'] },
      { num:'09', name:'Consumer Rights',                   cl:'10', types:['Notes','PYQ'] },
      // ── ADD MORE TOPICS BELOW ──
    ]
  }
];

// ── INFOGRAPHICS ──────────────────────────────────────────
// To add a new infographic, copy one object below and fill in:
// subject: 'geo' | 'hist' | 'civic' | 'eco'
// bg: background color (use CSS variable or hex)
// fg: text color
// link: path to your file e.g. 'infographics/india-map.pdf' (optional)
const INFOGRAPHICS = [
  { subject:'geo',   top:'🌍 Geography · Class 10',   mid:'India\'s Physical Divisions',          bot:'Map-based visual summary',       bg:'var(--geo-l)',   fg:'var(--geo-d)',   link:'' },
  { subject:'hist',  top:'🏛️ History · Class 10',     mid:'Nationalism in India — Timeline',      bot:'1857 to Independence',           bg:'var(--hist-l)',  fg:'var(--hist-d)',  link:'' },
  { subject:'eco',   top:'📊 Economics · Class 10',   mid:'Sectors of the Indian Economy',        bot:'Primary · Secondary · Tertiary', bg:'var(--eco-l)',   fg:'var(--eco-d)',   link:'' },
  { subject:'civic', top:'⚖️ Civics · Class 9',       mid:'Fundamental Rights — Flowchart',       bot:'Articles 12–35 simplified',      bg:'var(--civic-l)', fg:'var(--civic-d)', link:'' },
  { subject:'geo',   top:'🌍 Geography · Class 11',   mid:'Monsoon System in India',              bot:'Wind patterns & rainfall map',   bg:'var(--slate-l)', fg:'var(--slate-d)', link:'' },
  { subject:'hist',  top:'🏛️ History · Class 9',      mid:'French Revolution — Causes & Effects', bot:'Mind map format',                bg:'var(--hist-l)',  fg:'var(--hist-d)',  link:'' },
  { subject:'eco',   top:'📊 Economics · Class 12',   mid:'Supply & Demand Curves',               bot:'Graph-based visual explainer',   bg:'var(--eco-l)',   fg:'var(--eco-d)',   link:'' },
  { subject:'civic', top:'⚖️ Pol. Science · Class 12','mid':'Election Process in India',          bot:'Step-by-step flowchart',         bg:'var(--civic-l)', fg:'var(--civic-d)', link:'' },
  // ── ADD YOUR INFOGRAPHICS BELOW ──
  // { subject:'geo', top:'🌍 Geography · Class 9', mid:'Your Title Here', bot:'Short description', bg:'var(--geo-l)', fg:'var(--geo-d)', link:'infographics/your-file.pdf' },
];

// ── STRATEGIES ────────────────────────────────────────────
const STRATEGIES = [
  { em:'🗺️', title:'Map-first for Geography',      desc:'Always start every Geography chapter by drawing the map. Visual anchoring helps recall physical features, routes and locations in board exams without re-reading.' },
  { em:'📅', title:'Timeline method for History',  desc:'Create a one-page timeline per chapter. Dates become stories, not lists. Link cause → event → effect in a chain you can narrate in 5-mark answers.' },
  { em:'⚖️', title:'Article Anchoring for Civics', desc:'Remember article numbers by associating them with real life. Article 21 = age of majority = 21. Anchors stick better than rote memorization.' },
  { em:'📊', title:'Data + Story for Economics',   desc:'Never memorize a statistic without its story. HDI = 0.645? That means India ranks X because of Y. Examiners reward context, not raw figures.' },
  { em:'🔁', title:'Spaced Repetition',            desc:'Review notes on Day 1 → Day 3 → Day 7 → Day 21. Each review takes half the time. Retention goes from 30% to 90%.' },
  { em:'✍️', title:'Answer Writing Practice',      desc:'Write 3-mark and 5-mark answers from memory weekly. Board exams reward structure: intro + points + conclusion. Practice the format.' },
  { em:'🧠', title:'Feynman Technique',            desc:'After reading a chapter, close the book and explain it like you\'re teaching a Class 6 student. Gaps in explanation = gaps in understanding.' },
  { em:'📄', title:'PYQ First Strategy',           desc:'Start every chapter by reading past 5-year questions BEFORE the chapter. You\'ll read with purpose, spot what matters, and skip what doesn\'t appear in exams.' },
];
