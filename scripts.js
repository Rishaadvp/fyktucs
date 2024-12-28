document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('header nav ul');
    const toggleMenu = document.querySelector('.menu-toggle');

    toggleMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
