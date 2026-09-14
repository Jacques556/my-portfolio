// Mobile navigation menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.className = 'ri-close-line';
        } else {
            icon.className = 'ri-menu-3-line';
        }
    });

    // Close menu upon selecting any navigation link
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            if (icon) icon.className = 'ri-menu-3-line';
        });
    });
}