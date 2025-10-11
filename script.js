document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle the mobile menu
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        // Change icon from bars to close (X)
        if (mainNav.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close the menu when a link is clicked (important for single-page scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});