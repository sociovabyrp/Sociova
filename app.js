/* ═══════════════════════════════════════════
   SOCIOVA — app.js
   You don't need to edit this file.
   All your content goes in content.js
═══════════════════════════════════════════ */

let currentSubject = null;
let currentClass = 'all';
let searchOpen = false;

// ── PAGE NAVIGATION ──────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const map = { home:0, subjects:1, infographics:2, strategy:3, about:4 };
  const links = document.querySelectorAll('.nav-link');
  if (map[name] !== undefined && links[map[name]]) links[map[name]].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── MOBILE MENU ──────────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ── SEARCH ───────────────────────────────────────────────
function toggleSearch() {
  searchOpen = !searchOpen;
  document.getElementById('search-overlay').classList.toggle('open', searchOpen);
  if (searchOpen) {
    setTimeout(() => document.getElementById('search-input').focus(), 100);
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('search-input').value = '';
  }
}

function doSearch(query) {
  const q = query.toLowerCase().trim();
  const el = document.getElementById('search-results');
  if (!q) { el.innerHTML = ''; return; }
  const results = [];
  SUBJECTS.forEach(s => {
    s.topics.forEach(t => {
      if (t.name.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)) {
        results.push({ subjectKey: s.key, subjectName: s.name, topicName: t.name, cl: t.cl });
      }
    });
  });
  if (!results.length) {
    el.innerHTML = '<div class="search-result-item"><div class="sri-title" style="color:var(--muted)">No results found</div></div>';
    return;
  }
  el.innerHTML = results.slice(0, 8).map(r => `
    <div class="search-result-item" onclick="openFromSearch('${r.subjectKey}','${r.cl}')">
      <div class="sri-title">${r.topicName}</div>
      <div class="sri-sub">${r.subjectName} · Class ${r.cl}</div>
    </div>
  `).join('');
}

function openFromSearch(key, cl) {
  toggleSearch();
  openSubject(key);
  setTimeout(() => {
    const tab = [...document.querySelectorAll('.ctab')].find(t => t.textContent.includes(cl));
    if (tab) filterClass(tab, cl);
  }, 200);
}

// ── BUILD HOME QUICK LINKS ────────────────────────────────
function buildQuickLinks() {
  const el = document.getElementById('quick-links-home');
  el.innerHTML = SUBJECTS.map(s => `
    <div class="quick-link-item" onclick="openSubject('${s.key}')">
      <span class="ql-emoji">${s.emoji}</span>
      <div class="ql-info">
        <div class="ql-name">${s.name}</div>
        <div class="ql-sub">${s.chips.slice(0,2).join(' · ')}</div>
      </div>
      <span class="ql-count">${s.topics.length} topics →</span>
    </div>
  `).join('');
}

// ── BUILD SUBJECTS GRID ───────────────────────────────────
function buildSubjectsGrid() {
  const el = document.getElementById('subjects-grid');
  el.innerHTML = SUBJECTS.map(s => `
    <div class="subj-card ${s.colorClass}" onclick="openSubject('${s.key}')">
      <div class="sc-emoji">${s.emoji}</div>
      <div class="sc-name">${s.name}</div>
      <div class="sc-meta">${s.chips.slice(0,3).join(' · ')}</div>
      <div class="sc-tags">
        ${s.tags.map((t, i) => `<span class="tag" style="background:${s.tagColors[i].bg};color:${s.tagColors[i].fg}">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ── OPEN SUBJECT ─────────────────────────────────────────
function openSubject(key) {
  currentSubject = key;
  currentClass = 'all';
  const s = SUBJECTS.find(x => x.key === key);

  document.getElementById('detail-emoji').textContent = s.emoji;
  document.getElementById('detail-emoji').style.background = s.colorL;
  document.getElementById('detail-title').textContent = s.name;
  document.getElementById('detail-sub').textContent = s.sub;
  document.getElementById('detail-chips').innerHTML = s.chips.map(c =>
    `<span class="d-chip" style="background:${s.colorL};color:${s.colorD}">${c}</span>`
  ).join('');

  // counts
  document.getElementById('rt-notes').textContent       = s.counts.notes + ' files';
  document.getElementById('rt-books').textContent       = s.counts.books + ' files';
  document.getElementById('rt-infographics').textContent= s.counts.infographics + ' visuals';
  document.getElementById('rt-pyqs').textContent        = s.counts.pyqs + ' years';

  // reset class tabs
  document.querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ctab')[0].classList.add('active');

  renderTopics('all');
  showPage('detail');
}

// ── FILTER BY CLASS ───────────────────────────────────────
function filterClass(el, cls) {
  document.querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  currentClass = cls;
  renderTopics(cls);
}

// ── RENDER TOPICS ─────────────────────────────────────────
function renderTopics(cls) {
  const s = SUBJECTS.find(x => x.key === currentSubject);
  if (!s) return;
  const topics = cls === 'all' ? s.topics : s.topics.filter(t => t.cl === cls);
  const el = document.getElementById('topics-list');

  if (!topics.length) {
    el.innerHTML = '<div class="empty-state">No topics for Class ' + cls + ' yet. Adding soon! 📚</div>';
    return;
  }

  const typeColors = {
    Notes:      { bg:'var(--geo-l)',   fg:'var(--geo-d)'   },
    Timeline:   { bg:'var(--hist-l)',  fg:'var(--hist-d)'  },
    Map:        { bg:'var(--eco-l)',   fg:'var(--eco-d)'   },
    Flowchart:  { bg:'var(--civic-l)', fg:'var(--civic-d)' },
    Diagram:    { bg:'var(--slate-l)', fg:'var(--slate-d)' },
    Infographic:{ bg:'var(--civic-l)', fg:'var(--civic-d)' },
    PYQ:        { bg:'var(--hist-l)',  fg:'var(--hist-d)'  },
    Graph:      { bg:'var(--eco-l)',   fg:'var(--eco-d)'   },
    Summary:    { bg:'var(--soft)',    fg:'var(--muted)'   },
  };

  el.innerHTML = topics.map(t => `
    <div class="topic-row">
      <div class="topic-left">
        <div class="topic-num">${t.num}</div>
        <div>
          <div class="topic-name">${t.name}</div>
          <div class="topic-cl">Class ${t.cl}</div>
        </div>
      </div>
      <div class="topic-right">
        ${t.types.map(tp => {
          const c = typeColors[tp] || { bg:'var(--soft)', fg:'var(--muted)' };
          return `<span class="ttype" style="background:${c.bg};color:${c.fg}">${tp}</span>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ── BUILD INFOGRAPHICS ────────────────────────────────────
function buildInfoGrid(filter) {
  const el = document.getElementById('info-grid');
  const items = filter === 'all' ? INFOGRAPHICS : INFOGRAPHICS.filter(i => i.subject === filter);
  el.innerHTML = items.map(i => `
    <div class="info-card" style="background:${i.bg};color:${i.fg}" ${i.link ? `onclick="window.open('${i.link}')"` : ''}>
      <div class="ic-top">${i.top}</div>
      <div class="ic-mid">${i.mid}</div>
      <div class="ic-bot">${i.bot}</div>
    </div>
  `).join('');
}

function filterInfo(el, filter) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  buildInfoGrid(filter);
}

// ── BUILD STRATEGIES ──────────────────────────────────────
function buildStrategies() {
  document.getElementById('strategy-grid').innerHTML = STRATEGIES.map(s => `
    <div class="strat-card">
      <div class="strat-em">${s.em}</div>
      <div class="strat-title">${s.title}</div>
      <div class="strat-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildQuickLinks();
  buildSubjectsGrid();
  buildInfoGrid('all');
  buildStrategies();
});
