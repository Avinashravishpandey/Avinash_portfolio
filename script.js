document.addEventListener('DOMContentLoaded', function() {
  // Smooth Scrolling
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Active Navigation Link Highlighting
  const sections = document.querySelectorAll('section');

  function highlightNavLink() {
      let currentSectionId = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
              currentSectionId = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(currentSectionId)) {
              link.classList.add('active');
          }
      });
  }

  window.addEventListener('scroll', highlightNavLink);
  highlightNavLink(); // Call it once on page load

  // Basic Form Submission Alert
  const contactForm = document.querySelector('#contact form');

  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent the default form submission
          alert('Your message has been sent! (This is a demo)');
          contactForm.reset(); // Clear the form
      });
  }
});