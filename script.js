// Nawigacja — dodaj klasę .scrolled po przewinięciu
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Hamburger — otwieranie/zamykanie menu mobilnego
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Fade-in po przewinięciu — IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => {
            entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
    });
}, { threshold: 0.12 });

// Karty usług — wchodzą z lekkim opóźnieniem każda
document.querySelectorAll('.service__card').forEach((el, i) => {
    el.dataset.delay = i * 100;
    observer.observe(el);
});

// Wiersze cennika — wchodzą kaskadowo
document.querySelectorAll('.pricing__row').forEach((el, i) => {
    el.dataset.delay = i * 55;
    observer.observe(el);
});

// Bloki kontaktowe
document.querySelectorAll('.contact__block').forEach((el, i) => {
    el.dataset.delay = i * 100;
    observer.observe(el);
});
