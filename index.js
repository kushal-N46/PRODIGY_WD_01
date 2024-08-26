var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.display="block"
}
function closeNavbar()
{
    sidenav.style.display="none"
}

document.addEventListener("DOMContentLoaded", () => 
    {
    const navbar = document.querySelector('.navbar');
    const changeNavbarColor = () => {
        const scrollPosition = window.scrollY;
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#3d3d3d";
        } else {
            navbar.style.backgroundColor = "#000";
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
});