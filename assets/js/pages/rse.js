values = {
	"actividades": {
        "subtitle": "Subtítulo de Actividades",
        "text1": "Texto 1 de Actividades.",
        "bullets": ['Bullet 1 de Actividades.',
                    'Bullet 2 de Actividades.',
                    'Bullet 3 de Actividades.',
                    ],
        "text2": "Texto 2 de Actividades."
    },
    "alianzas": {
        "subtitle": "Subtítulo de Alianzas",
        "text1": "Texto 1 de Alianzas.",
        "bullets": ['Bullet 1 de Alianzas.',
                    'Bullet 2 de Alianzas.',
                    'Bullet 3 de Alianzas.',
                    ],
        "text2": "Texto 2 de Alianzas."
    },
    "experiencias": {
        "subtitle": "Subtítulo de Experiencias",
        "text1": "Texto 1 de Experiencias.",
        "bullets": ['Bullet 1 de Experiencias.',
                    'Bullet 2 de Experiencias.',
                    'Bullet 3 de Experiencias.',
                    ],
        "text2": "Texto 2 de Experiencias."
    },
    "voluntarios": {
        "vol-1": {
            "name": "Nombre Voluntario 1",
            "position": "Cargo Voluntario 1",
            "description": "Descripción Voluntario 1",
            "img": "assets/img/trainers/trainer-1.jpg",
            "facebook": "https://www.facebook.com/",
            "instagram": "https://www.instagram.com/",
            "linkedin": "https://www.linkedin.com/" 
        },
        "vol-2": {
            "name": "Nombre Voluntario 2",
            "position": "Cargo Voluntario 2",
            "description": "Descripción Voluntario 2",
            "img": "assets/img/trainers/trainer-2.jpg",
            "facebook": "https://www.facebook.com/",
            "instagram": "https://www.instagram.com/",
            "linkedin": "https://www.linkedin.com/" 
        },
        "vol-3": {
            "name": "Nombre Voluntario 3",
            "position": "Cargo Voluntario 3",
            "description": "Descripción Voluntario 3",
            "img": "assets/img/trainers/trainer-3.jpg",
            "facebook": "https://www.facebook.com/",
            "instagram": "https://www.instagram.com/",
            "linkedin": "https://www.linkedin.com/" 
        },
    }
}

let v = Object.keys(values.voluntarios).length;
var s = '';

document.getElementById("activities").getElementsByTagName('h3')[0].innerHTML = values["actividades"]["subtitle"];
document.getElementById("activities").getElementsByTagName('p')[0].innerHTML = values["actividades"]["text1"];
document.getElementById("activities").getElementsByTagName('ul')[0].innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["actividades"]["bullets"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("activities").getElementsByTagName('p')[1].innerHTML = values["actividades"]["text2"];

document.getElementById("alianzas").getElementsByTagName('h3')[0].innerHTML = values["alianzas"]["subtitle"];
document.getElementById("alianzas").getElementsByTagName('p')[0].innerHTML = values["alianzas"]["text1"];
document.getElementById("alianzas").getElementsByTagName('ul')[0].innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["alianzas"]["bullets"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("alianzas").getElementsByTagName('p')[1].innerHTML = values["alianzas"]["text2"];

document.getElementById("experiencias").getElementsByTagName('h3')[0].innerHTML = values["experiencias"]["subtitle"];
document.getElementById("experiencias").getElementsByTagName('p')[0].innerHTML = values["experiencias"]["text1"];
document.getElementById("experiencias").getElementsByTagName('ul')[0].innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["experiencias"]["bullets"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("experiencias").getElementsByTagName('p')[1].innerHTML = values["experiencias"]["text2"];

for (var i = 0; i < v; i++) {
    console.log(values["voluntarios"]["vol-"+String(i+1)]["facebook"]);
    s += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch"><div class="member"><img src="'
            +values["voluntarios"]["vol-"+String(i+1)]["img"]
            +'" class="img-fluid" alt=""><div class="member-content"><h4>'
            +values["voluntarios"]["vol-"+String(i+1)]["name"]
            +'</h4><span>'+values["voluntarios"]["vol-"+String(i+1)]["position"]+'</span><p>'
            +values["voluntarios"]["vol-"+String(i+1)]["description"]
            +'</p><div class="social"><a href="'
            +values["voluntarios"]["vol-"+String(i+1)]["instagram"]
            +'"><i class="bi bi-instagram"></i></a><a href="'
            +values["voluntarios"]["vol-"+String(i+1)]["facebook"]
            +'"><i class="bi bi-facebook"></i></a><a href="'
            +values["voluntarios"]["vol-"+String(i+1)]["linkedin"]
            +'"><i class="bi bi-linkedin"></i></a></div></div></div></div>';
    }
document.getElementById("voluntarios").innerHTML = s;