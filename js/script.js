// js/script.js

// Example: Simple alert on page load
window.addEventListener('load', function() {
    console.log('Page is fully loaded');
});

// Example: Toggle menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});