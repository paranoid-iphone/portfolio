const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.12 });

document.querySelectorAll('.project, .timeline article, .about-grid').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const navigation = document.querySelector('.nav');
const updateNavigation = () => navigation?.classList.toggle('is-floating', window.scrollY > 40);
updateNavigation();
window.addEventListener('scroll', updateNavigation, { passive: true });
