document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const bookNowButton = document.querySelector('.hero-buttons a[href="#now-showing"]');
    const findCinemaButton = document.querySelector('.hero-buttons a[href="#cinema"]');

    function toggleSections(activeSectionId) {
        sections.forEach(section => {
            if (activeSectionId === 'home' && (section.id === 'home' || section.id === 'features')) {
                section.style.display = 'block';
            } else if (section.id === activeSectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#', '');
            toggleSections(targetId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    if (bookNowButton) {
        bookNowButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSections('now-showing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (findCinemaButton) {
        findCinemaButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSections('cinema');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    toggleSections('home');

    const cities = document.querySelectorAll('.city');
    cities.forEach(city => {
        city.addEventListener('click', function() {
            cities.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelector('.feedback-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you for your feedback!");
        this.reset();
    });
});