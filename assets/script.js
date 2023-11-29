
const btnNavClose = document.querySelector('.nav-close');
const btnNavOpen = document.querySelector('.nav-open');
const menuBar = document.querySelector('.header-top ul');
btnNavOpen.addEventListener('click', function () {
    menuBar.style.right = '0';
})

btnNavClose.addEventListener('click', function() {
    menuBar.style.right = '-200px';
})