// menu hamburguesa
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//cabecera 

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                };
            };
        });
    

    // Stikcy navbar
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky' , window.scrollY > 100);

    // remover el incono del toggle de la navbar link (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};  

// Scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .habilidades-contenido, .proyectos-box, .contactame form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .sobre-contenido', { origin: 'right'});

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Desarrollador de Software', 'Profesional'],
    typedSeed: 100,
    backSeed: 100,
    backDelay: 1500,
    loop: true
})



document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(function(progressBar) {
        const percentage = 50;  // Establecer todas las barras de progreso al 50%
        const progressValue = progressBar.querySelector(".progress-value");
        let currentPercentage = 0;

        const animateProgress = setInterval(() => {
            if (currentPercentage >= percentage) {
                clearInterval(animateProgress);
                return; // Salir del intervalo cuando se alcance el porcentaje
            }
            currentPercentage++;
            progressBar.style.width = `${currentPercentage}%`;
            progressValue.textContent = `${currentPercentage}%`;
        }, 50); // Ajustar la velocidad de la animación
    });
});

