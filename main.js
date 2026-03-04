const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


(function () {
    emailjs.init("RMSn-QOPeOVeZCA0y");
})();

const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm("service_m19vr7o", "template_tdyubnc", this)
        .then(function () {

            messageBox.className = "form-message success";
            messageBox.innerText = "Message sent successfully! I will get back to you soon.";

            form.reset();

        })
        .catch(function () {

            messageBox.className = "form-message error";
            messageBox.innerText = "Something went wrong. Please try again.";

        });

});
