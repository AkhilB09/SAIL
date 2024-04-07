document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });