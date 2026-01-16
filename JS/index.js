
const hamburgerButton = document.getElementById('hamburger');
const menuList = document.getElementById('nav-links');
const menuIcon = hamburgerButton.querySelector('i');

hamburgerButton.addEventListener('click', function() {
    menuList.classList.toggle('active');
    if (menuList.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');     
        menuIcon.classList.add('fa-times');       
    } 

    else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

const allNavLinks = document.querySelectorAll('#nav-links a');

allNavLinks.forEach(function(singleLink) {
    singleLink.addEventListener('click', function() {
        menuList.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    });
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {

        event.preventDefault();

        const targetSection = document.querySelector(link.getAttribute('href'));

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth' 
            });
        }
    });
});

const myForm = document.getElementById('contact-form');

myForm.addEventListener('submit', function(event) {

    event.preventDefault();

    alert('Thanks, we get your massage');
    myForm.reset();
});