let menuIcon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle icon and navbar when navbar link is clicked(scroll)
    menuIcon.classList.remove('bx-x');
    Navbar.classList.remove('active');

};


// Scroll Reveal Animations
ScrollReveal({
    reset: true,
    distance: '1rem',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// Type JS
const typed = new Typed('.multiple-text', {
    strings:[' Front-end Developer', ' UI/UX Designer',],
    typeSpeed:100,
    typeSpeed:100,
    backDelay: 1000,
    loop:true
});