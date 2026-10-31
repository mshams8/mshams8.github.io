'use strict';
document.body.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
menuButton.hidden = false;
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 981px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});

const links = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = links.map(link => ({link, section: document.querySelector(link.hash)}))
  .filter(item => item.section);

// Evaluate all section positions together so overlapping sections cannot
// overwrite the selected link according to observer callback order.
function updateCurrentSection() {
  const marker = document.querySelector('.site-header').getBoundingClientRect().bottom + 110;
  let current = null;
  for (const item of sections) {
    if (item.section.getBoundingClientRect().top <= marker) current = item.link;
  }
  // Contact may be too short to reach the marker at the bottom of the page.
  if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = links[links.length - 1];
  }
  for (const link of links) {
    if (link === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

let framePending = false;
function scheduleSectionUpdate() {
  if (framePending) return;
  framePending = true;
  window.requestAnimationFrame(() => {
    updateCurrentSection();
    framePending = false;
  });
}
window.addEventListener('scroll', scheduleSectionUpdate, {passive: true});
window.addEventListener('resize', scheduleSectionUpdate);
window.addEventListener('hashchange', scheduleSectionUpdate);
updateCurrentSection();
