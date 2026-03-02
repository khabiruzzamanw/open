// ─── CLOCK ───
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${h}:${m}`;
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  document.getElementById('footerDate').textContent =
    `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}
updateClock();
setInterval(updateClock, 5000);

// ─── SEARCH / FILTER ───
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const allCards = document.querySelectorAll('.link-card');
const noResults = document.getElementById('noResults');

function filterCards() {
  const q = searchBar.value.trim().toLowerCase();
  let visible = 0;

  allCards.forEach(card => {
    const name = card.dataset.name || '';
    const url = card.querySelector('.card-url')?.textContent.toLowerCase() || '';
    const match = !q || name.includes(q) || url.includes(q);
    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });

  noResults.classList.toggle('visible', visible === 0 && q !== '');
}

searchBar.addEventListener('input', filterCards);
searchBar.addEventListener('keydown', e => {
  if (e.key === 'Escape') { searchBar.value = ''; filterCards(); }
  if (e.key === 'Enter') filterCards();
});
searchBtn.addEventListener('click', filterCards);

// Focus search on '/' key
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement !== searchBar) {
    e.preventDefault();
    searchBar.focus();
  }
});