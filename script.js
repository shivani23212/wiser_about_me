const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    
    // adds and removes class to <body> when btn clicked
    // (therefore all child elements of body also have this class as a parent class)
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
})