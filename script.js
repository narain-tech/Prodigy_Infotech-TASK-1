window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#444'; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
