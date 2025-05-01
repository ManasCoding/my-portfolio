let btn = document.querySelector(".btn");
let code = document.querySelector(".code");
let btn2 = document.querySelector(".btn2");

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#" + randomColor();
    code.innerHTML = "#" + randomColor();

})

function randomColor () {
    let random = Math.floor(Math.random() * 1000000);
    return random;

}



function randomcolor() {
			return Math.floor(Math.random() * 255);
		}
btn2.addEventListener('click', () => {
    code.innerHTML = "rgb(" + randomcolor() + ',' + randomcolor()
    + ',' + randomcolor() + ")";

    document.body.style.backgroundColor = "rgb("
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + ")";

});




let mth = document.querySelector(".mth");

let index = 0;

mth.addEventListener("click", () => {
    let colors = ["red", "blue", "orange", "yellow", "green"];
    document.body.style.backgroundColor = colors[index++];
    code.innerHTML = "#" + randomColor() + " " + "rgb(" + randomcolor() + ',' + randomcolor()
    + ',' + randomcolor() + ")";

    if(index > colors.length - 1)
    index = 0;
})