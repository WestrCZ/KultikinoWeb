// Function to set active link based on scroll position
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const footer = document.getElementById('contact');

    let currentSection = '';

    // Check if the user has scrolled to the bottom of the page
    if (window.scrollY == 0) {
        currentSection = 'about';
    } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        currentSection = 'contact';
    } else {
        // Determine the current section in view
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                currentSection = section.id;
            }
        });
    }

    // Update active link based on the current section
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', setActiveLink);

// Initial call to set active link
setActiveLink();

// Function to handle smooth scrolling with offset
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    const headerOffset = document.querySelector('header').offsetHeight; // Get header height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Event listeners for navigation links to implement smooth scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        smoothScrollTo(targetId);
    });
});
