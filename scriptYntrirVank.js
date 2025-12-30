// scriptYntrirVank.js
// This script populates the page based on filename (indexYntrirVankN.html)
// and implements simple drag/drop + check logic.

const pagesData = [
  // Page 1
  {
    cards: [
      { prefix: 'դա', image: '🔪', expected: 'նակ' },
      { prefix: 'ա', image: '🪑', expected: 'թոռ' },
      { prefix: 'ծա', image: '🌷', expected: 'ղիկ' }
    ],
    pool: ['նակ','իկ','ղիկ','բա','թոռ','ներ']
  },
  // Page 2
  {
    cards: [
      { prefix: 'կիտ', image: '🍋', expected: 'րոն' },
      { prefix: 'բա', image: '🍌', expected: 'նան' },
      { prefix: 'աղ', image: '👩🏻‍🦰', expected: 'ջիկ' }
    ],
    pool: ['ջիկ','ալ','նան','րոն','ենի','իկ']
  },
  // Page 3
  {
    cards: [
      { prefix: 'ա', image: '☀️', expected: 'րև' },
      { prefix: 'մա', image: '✏️', expected: 'տիտ' },
      { prefix: 'քար', image: '🗺️', expected: 'տեզ' }
    ],
    pool: ['տիտ','ղան','գի','րև','մակ','տեզ']
  },
  // Page 4
  {
    cards: [
      { prefix: 'կա', image: '🐱', expected: 'տու' },
      { prefix: 'ձեռ', image: '🧤', expected: 'նոց' },
      { prefix: 'բաճ', image: '🧥', expected: 'կոն' }
    ],
    pool: ['տու','վազ','նոց','կոն','լի','եղ']
  },
  // Page 5
  {
    cards: [
      { prefix: 'ա', image: '👂🏻', expected: 'կանջ' },
      { prefix: 'փու', image: '🎈', expected: 'չիկ' },
      { prefix: 'լե', image: '👅', expected: 'զու' }
    ],
    pool: ['նիկ','չիկ','ակ','եր','կանջ','զու']
  },
  // Page 6
  {
    cards: [
      { prefix: 'խա', image: '🍇', expected: 'ղող' },
      { prefix: 'գուլ', image: '🧦', expected: 'պա' },
      { prefix: 'ակ', image: '👓', expected: 'նոց' }
    ],
    pool: ['տամ','ղող','ձոր','նոց','նակ','պա']
  },
  // Page 7
  {
    cards: [
      { prefix: 'ե', image: '🍓', expected: 'լակ' },
      { prefix: 'թի', image: '🦋', expected: 'թեռ' },
      { prefix: 'ափ', image: '🥣', expected: 'սե' }
    ],
    pool: ['նակ','նի','լակ','թեռ','րեն','սե']
  },
  // Page 8
  {
    cards: [
      { prefix: 'բա', image: '☕', expected: 'ժակ' },
      { prefix: 'եղ', image: '🦌', expected: 'նիկ' },
      { prefix: 'ագ', image: '🐦‍⬛', expected: 'ռավ' }
    ],
    pool: ['նիկ','ռավ','կի','պե','ժակ','շա']
  },
  // Page 9
  {
    cards: [
      { prefix: 'կե', image: '🍒', expected: 'ռաս' },
      { prefix: 'նա', image: '🍊', expected: 'րինջ' },
      { prefix: 'քա', image: '📏', expected: 'նոն' }
    ],
    pool: ['ով','ից','ռաս','րինջ','յան','նոն']
  },
  // Page 10
  {
    cards: [
      { prefix: 'կոն', image: '🍬', expected: 'ֆետ' },
      { prefix: 'աղ', image: '🦊', expected: 'վես' },
      { prefix: 'ա', image: '🦷', expected: 'տամ' }
    ],
    pool: ['վես','յի','են','որ','ֆետ','տամ']
  }
];

function getPageIndex() {
  const m = window.location.pathname.match(/indexYntrirVank(\d+)\.html$/);
  if (!m) return 1;
  return Math.max(1, Math.min(10, parseInt(m[1],10)));
}

function renderPage() {
  const idx = getPageIndex() - 1;
  const data = pagesData[idx];
  document.getElementById('pageNum').textContent = `Էջ ${idx+1} / 10`;

  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = '';
  data.cards.forEach((c, i) => {
    const card = document.createElement('div'); card.className = 'card';
    const prefix = document.createElement('div'); prefix.className = 'prefix'; prefix.textContent = c.prefix;
    const slot = document.createElement('div'); slot.className = 'slot'; slot.dataset.expected = c.expected;
    slot.dataset.index = i;
    slot.addEventListener('dragover', e => e.preventDefault());
    slot.addEventListener('drop', onDrop);
    const image = document.createElement('div'); image.className = 'image'; image.textContent = c.image;
    card.appendChild(prefix); card.appendChild(slot); card.appendChild(image);
    cardsContainer.appendChild(card);
  });

  // pool
  const pool = document.querySelector('.pool'); pool.innerHTML = '';
  data.pool.forEach(s => {
    const el = document.createElement('div'); el.className = 'syllable'; el.draggable = true; el.textContent = s;
    el.dataset.value = s;
    el.addEventListener('dragstart', onDragStart);
    pool.appendChild(el);
  });
}

let dragged = null;
function onDragStart(e) {
  dragged = e.target;
  e.dataTransfer.setData('text/plain', e.target.dataset.value);
}

function onDrop(e) {
  e.preventDefault();
  const val = e.dataTransfer.getData('text/plain');
  const target = e.currentTarget;
  // remove existing content back to pool
  if (target.dataset.filledBy) {
    // reveal original in pool
    const pool = document.querySelectorAll('.pool .syllable');
    pool.forEach(p => { if (p.dataset.value === target.dataset.filledBy) p.classList.remove('hidden'); });
  }
  // put new
  target.textContent = val;
  target.classList.add('filled');
  target.dataset.filledBy = val;
  // hide one pool item with this value
  const poolItems = document.querySelectorAll('.pool .syllable');
  for (const p of poolItems) {
    if (p.dataset.value === val && !p.classList.contains('hidden')) { p.classList.add('hidden'); break; }
  }
}

function checkAnswers() {
  const slots = document.querySelectorAll('.slot');
  slots.forEach(s => {
    s.classList.remove('correct','incorrect');
    const provided = (s.dataset.filledBy || '').trim();
    const expected = (s.dataset.expected || '').trim();
    if (!provided) { s.classList.add('incorrect'); }
    else if (provided === expected) s.classList.add('correct'); else s.classList.add('incorrect');
  });
}

function initControls() {
  const idx = getPageIndex();
  const prevLink = document.getElementById('prevLink');
  if (idx === 1) prevLink.href = 'index.html'; else prevLink.href = `indexYntrirVank${idx-1}.html`;
  document.getElementById('homeLink').href = 'index.html';
  document.getElementById('checkBtn').addEventListener('click', checkAnswers);
}

// set up next link and visibility for prev on DOMContentLoaded
function setupNavVisibility(){
  const idx = getPageIndex();
  const prevLink = document.getElementById('prevLink');
  const nextLink = document.getElementById('nextLink');
  if (prevLink) {
    if (idx === 1) prevLink.style.visibility = 'hidden'; else { prevLink.style.visibility = 'visible'; prevLink.href = `indexYntrirVank${idx-1}.html`; }
  }
  if (nextLink) {
    if (idx < 10) nextLink.href = `indexYntrirVank${idx+1}.html`; else nextLink.href = 'index.html';
  }
}

window.addEventListener('DOMContentLoaded', () => { renderPage(); initControls(); });
window.addEventListener('DOMContentLoaded', setupNavVisibility);
