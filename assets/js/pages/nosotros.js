function biograph(e) {
	if(e.className == 'about__slot') {
		e.className = 'about__slot bio';
	}
	else {
		e.className = 'about__slot';
	}
}

let values = {
	"mision": "ENERVIDA es una institución de carácter privado comprometida con la mejora\nde las condiciones de vida de hombres, mujeres, jóvenes, niños y mascotas en\nsituación de calle. Tiene la misión de acelerar el proceso de adopción de\ntecnologías para el acceso y uso eficiente de la energía y el agua en el país.",
	"vision": "La visión de ENERVIDA es que cada\nrincón de Bolivia y del mundo cuente con acceso a energía y agua, y que lo\nutilice de manera responsable para el bienestar de la sociedad y la estabilidad\nde los ecosistemas en general, de hoy y mañana.",
	"founders": {
		"1": {
			"name": "Nombre Fundador 1",
			"description": "Descripción Fundador 1",
			"img": "assets/img/trainers/trainer-1.jpg",
			"facebook": "https://www.facebook.com/",
			"instagram": "https://www.instagram.com/",
			"linkedin": "https://www.linkedin.com/" 
		},
		"2": {
			"name": "Nombre Fundador 2",
			"description": "Descripción Fundador 2",
			"img": "assets/img/trainers/trainer-2.jpg",
			"facebook": "https://www.facebook.com/",
			"instagram": "https://www.instagram.com/",
			"linkedin": "https://www.linkedin.com/" 
		}
	}
}

function updateAbout() {
	document.getElementById("mision").innerHTML = values["mision"];
	document.getElementById("vision").innerHTML = values["vision"];
}
function updateFounders() {
	document.getElementById("fundadores").getElementsByTagName('img')[0].src = values["founders"]["1"]["img"];
	document.getElementById("fundadores").getElementsByTagName('h4')[0].innerHTML = values["founders"]["1"]["name"];
	document.getElementById("fundadores").getElementsByTagName('p')[0].innerHTML = values["founders"]["1"]["description"];
	document.getElementById("f1-links").getElementsByTagName('a')[0].href = values["founders"]["1"]["facebook"];
	document.getElementById("f1-links").getElementsByTagName('a')[1].href = values["founders"]["1"]["instagram"];
	document.getElementById("f1-links").getElementsByTagName('a')[2].href = values["founders"]["1"]["linkedin"];
	document.getElementById("fundadores").getElementsByTagName('img')[1].src = values["founders"]["2"]["img"];
	document.getElementById("fundadores").getElementsByTagName('h4')[1].innerHTML = values["founders"]["2"]["name"];
	document.getElementById("fundadores").getElementsByTagName('p')[1].innerHTML = values["founders"]["2"]["description"];
	document.getElementById("f2-links").getElementsByTagName('a')[0].href = values["founders"]["2"]["facebook"];
	document.getElementById("f2-links").getElementsByTagName('a')[1].href = values["founders"]["2"]["instagram"];
	document.getElementById("f2-links").getElementsByTagName('a')[2].href = values["founders"]["2"]["linkedin"];
}

updateAbout();
updateFounders();