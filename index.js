let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navbar');
const navbar = document.querySelector('.navbar-div');

// menu.addEventListener("click", () => {
//     navbar.style.display = "block";
//     navbar.style.display = "flex";
//     menu.classList.toggle('bx-x');

// });

// navlist.classList.toggle('open');

menu.addEventListener("click", () => {
    // Toggle the 'bx-x' class on menu
    menu.classList.toggle('bx-x');
    
    // Toggle navbar visibility
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
});

    