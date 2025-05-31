const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const backToTopBtn = document.getElementById('backToTop');


window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });

  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const detailsButtons = document.querySelectorAll('.details-btn');
detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.laptop-card');
    const name = card.getAttribute('data-name');
    const specs = card.getAttribute('data-specs');
    const price = card.getAttribute('data-price');
    alert(`Laptop: ${name}\nSpecifications: ${specs}\nPrice: ${price}`);
  });
});


backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
