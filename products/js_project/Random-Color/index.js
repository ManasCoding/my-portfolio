const divElem = document.getElementById("divID");
const span = document.querySelector(".span");
		/*function randomcolor() {
			return Math.floor(Math.random() * 255);
		}
		divElem.addEventListener('click', () => {
			document.body.style.backgroundColor = 'rgba('
				+ randomcolor() + ',' + randomcolor()
				+ ',' + randomcolor() + '\)'

            span.style.innerHTMl = 'rgba('
			+ randomcolor() + ',' + randomcolor()
			+ ',' + randomcolor() + '\)'
		});*/

		divElem.addEventListener('click', () => {
			let random = Math.floor(Math.random() * 1000000); 
			document.body.style.backgroundColor = "#" + random;
			span.style.innerHTMl = "#" + random;
		});