const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach((link) => {
  if (link.getAttribute('href') === path) link.classList.add('active');
});

const pageMap = {
  home: 'index.html',
  about: 'about.html',
  team: 'about.html',
  competition: 'competition.html',
  submissions: 'competition.html',
  educator: 'educators.html',
  educators: 'educators.html',
  resources: 'resources.html',
  schedule: 'schedule.html',
  contact: 'contact.html'
};

const searchForm = document.querySelector('.site-search');
const searchInput = document.querySelector('#site-search-input');

if (searchForm && searchInput) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;
    const target = pageMap[query] || Object.entries(pageMap).find(([key]) => key.includes(query))?.[1];
    if (target) window.location.href = target;
  });
}
