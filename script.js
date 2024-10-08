function toggleNavbar() {
    const navbarMenu = document.getElementById('nav-links');
    navbarMenu.classList.toggle('show');
}

const navbarLinks = document.querySelectorAll('.nav-links li a');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarMenu = document.getElementById('nav-links');
        navbarMenu.classList.remove('show');
    });
});


window.addEventListener('click', (event) => {
    const navbarMenu = document.getElementById('nav-links');
    const navbarToggle = document.querySelector('.navbar-toggle');
    if (!navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)) {
        navbarMenu.classList.remove('show');
    }
});