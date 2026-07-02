document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.hamburger-btn');
  var panel = document.querySelector('.mobile-nav-panel');
  if (!btn || !panel) return;

  btn.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      panel.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
});
