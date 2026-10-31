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
window.matchMedia('(min-width: 821px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const links = [...navigation.querySelectorAll('a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-15% 0px -60% 0px'});
  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
  observer.observe(document.querySelector('#home'));
}
