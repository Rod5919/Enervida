// Pen by ArcSinDesign.com - Follow https://codepen.io/BoiseDigital/

//It's a bit of programming pun, you see
function biograph(e) {
	if(e.className == 'about__slot') {
		e.className = 'about__slot bio';
	}
	else {
		e.className = 'about__slot';
	}
}

values = {
	"mision": "ENERVIDA es una institución de carácter privado comprometida con la mejora\nde las condiciones de vida de hombres, mujeres, jóvenes, niños y mascotas en\nsituación de calle. Tiene la misión de acelerar el proceso de adopción de\ntecnologías para el acceso y uso eficiente de la energía y el agua en el país.",
	"vision": "La visión de ENERVIDA es que cada\nrincón de Bolivia y del mundo cuente con acceso a energía y agua, y que lo\nutilice de manera responsable para el bienestar de la sociedad y la estabilidad\nde los ecosistemas en general, de hoy y mañana."
}

document.getElementById("mision").innerHTML = values["mision"];
document.getElementById("vision").innerHTML = values["vision"];
