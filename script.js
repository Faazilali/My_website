// Add any additional JavaScript functionality here
// For example, you can add smooth scrolling behavior for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight active section
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Add some offset for better visibility
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const targetLink = document.querySelector(`a[href="#${section.id}"]`);
      navLinks.forEach(link => link.classList.remove('active'));
      targetLink.classList.add('active');
    }
  });
});