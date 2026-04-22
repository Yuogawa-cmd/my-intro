document.addEventListener('DOMContentLoaded', () => {
    // Initial hero animation
    setTimeout(() => {
        const heroContent = document.querySelector('.fade-in');
        if (heroContent) {
            heroContent.classList.add('visible');
        }
    }, 100);

    // Scroll animation observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: only animate once
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.slide-up').forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('.about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        scrollIndicator.style.cursor = 'pointer';
    }
});
