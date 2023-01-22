const vocals = ["e", "i", "a", "o", "u"];
const keys = ["enter", "imes", "ai", "ober", "ufat"];

const encryptBtn = document.querySelector(".btn-encrypt");
const decryptBtn = document.querySelector(".btn-decrypt");
const copyBtn = document.querySelector(".btn-copy");

function encrypter() {
	let text = document.querySelector(".text-area").value;
	let response = document.querySelector(".response");

	if (validateText(text))
	{
		changeDisplay();
		let encrypt = "";
		for (i = 0; i < 5; i++) {
			encrypt = text.replaceAll(`${vocals[i]}`,`${keys[i]}`);
			text = encrypt;	
		}

		response.innerHTML = encrypt;
	}
	else {
		alert("No deben ser utilizados letras mayúsculas ni acentos ni caracteres especiales");
	}
}

function decrypter() {
	let text = document.querySelector(".text-area").value;
	let response = document.querySelector(".response");

	if(validateText(text))
	{
		changeDisplay();
	 	let decrypt = "";
		for (i = 0; i < 5; i++) {
			decrypt = text.replaceAll(`${keys[i]}`,`${vocals[i]}`);
			text = decrypt	
		}

		response.innerHTML = decrypt;		
	}
	else {
		alert("No deben ser utilizados letras mayúsculas ni acentos ni caracteres especiales");
	}
}

function copyText() {
	//Creamos un input
	const aux = document.createElement("input");
  	//Al input le asignamos como valor nuestro email
  	aux.value = document.querySelector(".response").innerHTML;
  	//Añadimos el input al body
  	document.body.appendChild(aux);
  	//Seleccionamos su contenido
  	aux.select();
  	//Copiamos el contenido al portapapeles
  	document.execCommand("copy");
  	//Removemos el input
  	document.body.removeChild(aux);	
}

let msgAside = document.querySelector(".aside-message");
let resAside = document.querySelector(".aside-response");
function changeDisplay() {
	if (!msgAside.classList.contains("none")) {
		msgAside.classList.add("none");
		resAside.classList.remove("none");
	}
}

function validateText(text) {
	const regExp = /^[a-z ]+$/;
	return regExp.test(text);
}

encryptBtn.addEventListener("click", () => {
	encrypter();
})

decryptBtn.addEventListener("click", () => {
	decrypter();
})

copyBtn.addEventListener("click", () => {
	copyText();
})


// ============ *** MEDIA QUERIES *** ================

const mqlWidthDesk = matchMedia("(min-width: 768px)");
const mqlWidthMovil = matchMedia("(max-width: 768px)");

const mqlHeightDesk = matchMedia("(min-height: 613px)");
const mqlHeightMovil = matchMedia("(max-height: 613px)");

//Si la resolución horizontal es mayor a 768px...
mqlWidthDesk.addEventListener("change", mql => {
	if (mql.matches && screen.availHeight > 613) {
		console.log("Entré");
		console.log("Hola Desktop");

		const boxMuñeco = document.querySelector(".box-muñeco");
  		boxMuñeco.style.display = "block";
	}
	if (mql.matches && screen.availHeight < 613) {
		console.log("Hola Desktop");

		const boxMuñeco = document.querySelector(".box-muñeco");
  		boxMuñeco.style.display = "none";
	}
	console.log("Chau Desktop");
})

//Si la resolución horizontal es menor a 768px...
mqlWidthMovil.addEventListener("change", mql => {
	if (mql.matches) {
		console.log("Hola Movil");	

		const boxMuñeco = document.querySelector(".box-muñeco");
  		boxMuñeco.style.display = "none";
	}
	else {
		console.log("Chau Movil");
	}
})

//Si la resolución vertical es mayor a 613px...
mqlHeightDesk.addEventListener("change", mql => {
	if (mql.matches && screen.availWidth >= 768) {
		console.log("Hola Desktop");	

		const boxMuñeco = document.querySelector(".box-muñeco");
  		boxMuñeco.style.display = "block";
	}
	else {
		console.log("Chau Desktop");
	}
})

//Si la resolución vertical es menor a 613px...
mqlHeightMovil.addEventListener("change", mql => {
	if (mql.matches && screen.availWidth >= 768) {
		console.log("Hola Movil");	

		const boxMuñeco = document.querySelector(".box-muñeco");
  		boxMuñeco.style.display = "none";
	}
	else {
		console.log("Chau Movil");
	}
})


//INTENTER CON FUNCION ANONIMA AUTOEJECUTABLE
document.addEventListener("DOMContentLoaded", () => {
	const boxMuñeco = document.querySelector(".box-muñeco");
	if (screen.availWidth > 768 && screen.availHeight > 613) {
		boxMuñeco.style.display = "block";
	}
})