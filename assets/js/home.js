(() => {
  const hero = document.querySelector('.hero');
  const homeTab = document.querySelector('.home-tab');
  const panels = [...document.querySelectorAll('.panel')];
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const modal = document.querySelector('.modal');
  let active = null;

  const setActive = (index) => {
    active = index;
    hero.classList.toggle('hero--collapsed', index !== null);
    homeTab.hidden = index === null;
    panels.forEach((panel, i) => {
      const open = i === index;
      panel.classList.toggle('panel--open', open);
      panel.querySelector('.panel__tab').setAttribute('aria-expanded', open);
      panel.querySelector('.panel__symbol').textContent = open ? '−' : '+';
      panel.querySelector('.panel__content').inert = !open;
    });
  };

  const setMenu = (open) => {
    nav.classList.toggle('nav--open', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  panels.forEach((panel, i) =>
    panel.querySelector('.panel__tab').addEventListener('click', () => setActive(active === i ? null : i)));
  document.querySelectorAll('[data-panel]').forEach((el) =>
    el.addEventListener('click', () => { setActive(Number(el.dataset.panel)); setMenu(false); }));
  document.querySelectorAll('[data-home]').forEach((el) => el.addEventListener('click', () => setActive(null)));
  document.querySelectorAll('[data-pick]').forEach((el) => el.addEventListener('click', () => modal.showModal()));

  navToggle.addEventListener('click', () => setMenu(!nav.classList.contains('nav--open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  modal.querySelector('.modal__close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => {
    const r = modal.getBoundingClientRect();
    const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (e.target === modal && outside) modal.close();
  });
})();
