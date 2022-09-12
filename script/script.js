const burgerBtn = document.querySelector('.burger');
const navEl = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav li');

console.log(navLinks);

burgerBtn.addEventListener('click', () => {
    navEl.classList.toggle('open');
    navLinks.forEach((link) => {
        link.classList.toggle('fade');
    });
});
