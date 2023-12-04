document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    var navbarAtas = document.querySelector('.navbar-atas');
    var menuBawah = document.querySelector('.menu-bawah');
    var twoLineButton = document.querySelector('.two-line');
    
    function toggleNavbarVisibility(event) {
        event.preventDefault(); // Prevent the default behavior (page refresh)
        if (navbarAtas.style.display === 'flex') {
            navbarAtas.style.display = 'none';
            menuBawah.style.display = 'flex';
        } else {
            navbarAtas.style.display = 'flex';
            menuBawah.style.display = 'none';
        }
    }
    if (navbarAtas && menuBawah && twoLineButton) {
        function handleScroll() {
            var scrollPosition = window.scrollY || window.pageYOffset;

            if (scrollPosition < 462) {
                navbarAtas.style.display = 'none';
                menuBawah.style.display = 'flex';
            } else if (scrollPosition < 590 ){
                navbarAtas.style.display = 'flex';
                menuBawah.style.display = 'none';
            }
        }

        

        window.addEventListener('scroll', handleScroll);
        twoLineButton.addEventListener('click', toggleNavbarVisibility);

        handleScroll();
    } else {
        console.error('Error broo');
    }
});