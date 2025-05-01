let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let log = document.querySelector(".log");
let container = document.querySelector(".container");
let cl = document.querySelector(".close");
let main = document.querySelector(".main");

log.addEventListener("click", () => {
	main.disabled = true; 
    container.style.display = "block";

})
cl.addEventListener("click", () => {
    container.style.display = "none";
})

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});