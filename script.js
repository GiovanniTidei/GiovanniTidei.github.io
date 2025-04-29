document.addEventListener('DOMContentLoaded', function() {
    // Gestione menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Chiudi menu mobile quando si clicca su un link
    const mobileLinks = document.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Gestione dello scroll tra sezioni con transizione
    const sections = document.querySelectorAll('.section');
    const navLinksArray = Array.from(mobileLinks);
    
    // Mostra la sezione home all'inizio
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('home').classList.add('visible');
    
    // Osserva le sezioni per cambiare il link attivo nella navbar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Nascondi tutte le sezioni
                sections.forEach(section => {
                    section.classList.add('hidden');
                    section.classList.remove('visible');
                });
                
                // Mostra la sezione corrente
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
                
                // Aggiorna il link attivo nella navbar
                const id = entry.target.getAttribute('id');
                navLinksArray.forEach(link => {
                    link.classList.remove('text-indigo-600');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('text-indigo-600');
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    // Osserva tutte le sezioni
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Smooth scroll per i link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });
});