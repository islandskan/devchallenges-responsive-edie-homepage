const burgerBtn = document.querySelector('.burger');
const navEl = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav li');

burgerBtn.addEventListener('click', () => {
    navEl.classList.toggle('open');
    if (navEl.classList.contains('open')) {
        burgerBtn.classList.add('fixed');
    } else {
        burgerBtn.classList.remove('fixed');
    }
    navLinks.forEach((link) => {
        link.classList.toggle('fade');
    });
});
