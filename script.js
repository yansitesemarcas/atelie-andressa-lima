(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
    }));
  }

  const orderForm = document.querySelector('#cake-order');
  if (orderForm) {
    orderForm.addEventListener('submit', event => {
      event.preventDefault();
      const flavor = document.querySelector('#cake-flavor').value;
      const size = document.querySelector('#cake-size').value;
      if (!flavor || !size) return;
      const message = [
        'Olá, Andressa! Vim pelo site do Ateliê Andressa Lima e gostaria de encomendar um bolo.',
        '',
        'Produto: Bolo Afogadinho Gourmet',
        'Sabor: ' + flavor,
        'Tamanho: ' + size,
        '',
        'Poderia me informar a disponibilidade e os próximos passos?'
      ].join('\n');
      window.open('https://wa.me/5585981371628?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }
})();