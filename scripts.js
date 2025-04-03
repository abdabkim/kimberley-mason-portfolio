// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target section id from href
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Scroll to the target section with smooth behavior
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update active class on nav links
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
  
  // Update active nav link on scroll
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 10;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});