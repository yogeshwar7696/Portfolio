// Smooth Scrolling Functionality
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
  
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Get target section
        const targetId = link.getAttribute('href').substring(1); // Remove '#' from href
        const targetSection = document.getElementById(targetId);
  
        // Smooth scroll to the target section
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      });
    });
  });
  