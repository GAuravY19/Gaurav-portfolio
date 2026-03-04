const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thanks for reaching out! I will contact you soon.");

form.reset();

});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
