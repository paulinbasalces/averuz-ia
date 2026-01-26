/* =========================================
   FUNCIONALIDADES NATIVAS (SEM SDK CANVA)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile Toggle [cite: 194-197]
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Scroll Animations Observer [cite: 202-204]
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .animate-scale-on-scroll, .animate-slide-left, .animate-slide-right').forEach(el => {
        observer.observe(el);
    });

    // 3. Back to top [cite: 200]
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});