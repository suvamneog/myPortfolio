document.getElementById('contact-link').addEventListener('click', function() {
    window.location.href = 'https://github.com/suvamneog';
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const headerOffset = 60; 
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Parallax effect for background shapes
    window.addEventListener('scroll', () => {
        const shapes = document.querySelectorAll('.shape');
        const scrollPosition = window.pageYOffset;

        shapes.forEach((shape, index) => {
            const speed = 0.1 * (index + 1);
            shape.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });

    // Animate background text on scroll
    const backgroundText = document.querySelector('.background-text');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        backgroundText.style.transform = `translateX(-${scrollPosition * 0.5}px)`;
    });

    // Parallax effect for About card
    const aboutCard = document.querySelector('.about-card');
    window.addEventListener('scroll', () => {
        if (aboutCard) {
            const scrollPosition = window.pageYOffset;
            const aboutOffset = aboutCard.offsetTop;
            const aboutHeight = aboutCard.offsetHeight;
            const windowHeight = window.innerHeight;

            if (scrollPosition + windowHeight > aboutOffset && scrollPosition < aboutOffset + aboutHeight) {
                const parallaxValue = (scrollPosition + windowHeight - aboutOffset) / 10;
                aboutCard.style.transform = `translateY(${parallaxValue}px)`;
            }
        }
    });
});