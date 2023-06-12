document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.header-nav-items').classList.add('show');
    document.querySelector('.close-menu').classList.add('show');
    this.classList.add('show');
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.header-nav-items').classList.remove('show');
    document.querySelector('.hamburger-menu').classList.remove('show');
    this.classList.remove('show');
});
