/* =========================================
   Funcionalidades Nativa (Sem Canva SDK)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Fechar ao clicar em links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll Suave para Âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Observer para Animações ao Rolar a Tela
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in-up, .animate-on-scroll, .animate-scale-on-scroll, .animate-slide-left, .animate-slide-right').forEach(el => observer.observe(el));

    // Newsletter Feedback
    const newsletterForm = document.getElementById('newsletter-form-substack');
    const newsletterSubmitBtn = document.getElementById('newsletter-submit-btn');
    const newsletterSuccessMsg = document.getElementById('newsletter-success-msg');
    const newsletterInput = document.getElementById('newsletter-email-substack');
    
    if (newsletterForm && newsletterSubmitBtn && newsletterSuccessMsg && newsletterInput) {
      newsletterForm.addEventListener('submit', () => {
        // Disable submit button
        newsletterSubmitBtn.disabled = true;
        newsletterSubmitBtn.textContent = 'Enviando...';
        newsletterSubmitBtn.classList.add('opacity-50', 'cursor-not-allowed');
        
        // Show success message after short delay
        setTimeout(() => {
          newsletterInput.value = '';
          newsletterSubmitBtn.classList.add('hidden');
          newsletterSuccessMsg.classList.remove('hidden');
          
          // Reset form after 5 seconds
          setTimeout(() => {
            newsletterSuccessMsg.classList.add('hidden');
            newsletterSubmitBtn.classList.remove('hidden', 'opacity-50', 'cursor-not-allowed');
            newsletterSubmitBtn.disabled = false;
            newsletterSubmitBtn.textContent = 'Assinar';
          }, 5000);
        }, 1000);
      });
    }
});