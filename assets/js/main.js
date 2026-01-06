(function () {
  const burger = document.querySelector('[data-burger]');
  const drawer = document.querySelector('[data-drawer]');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }

  // Active link
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav] a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
    if (path === '' && href === 'index.html') a.classList.add('active');
  });

  // Optional: display a success message if redirect includes ?sent=1
  const params = new URLSearchParams(location.search);
  if (params.get('sent') === '1') {
    const ok = document.querySelector('[data-success]');
    if (ok) ok.classList.add('show');
  }
})();
