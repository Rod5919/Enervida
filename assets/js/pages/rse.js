values = {
	"actividades": {
        "subtitle": "Subtítulo de Actividades",
        "text1": "Texto 1 de Actividades.",
        "bullets": ['Bullet 1 de Actividades.',
                    'Bullet 2 de Actividades.',
                    'Bullet 3 de Actividades.',
                    ],
        "text2": "Texto 2 de Actividades.",
        "img": "assets/img/about.jpg"
    },
    "alianzas": {
        "subtitle": "Subtítulo de Alianzas",
        "text1": "Texto 1 de Alianzas.",
        "bullets": ['Bullet 1 de Alianzas.',
                    'Bullet 2 de Alianzas.',
                    'Bullet 3 de Alianzas.',
                    ],
        "text2": "Texto 2 de Alianzas.",
        "img": "assets/img/about.jpg"
    },
    "experiencias": {
        "subtitle": "Subtítulo de Experiencias",
        "text1": "Texto 1 de Experiencias.",
        "bullets": ['Bullet 1 de Experiencias.',
                    'Bullet 2 de Experiencias.',
                    'Bullet 3 de Experiencias.',
                    ],
        "text2": "Texto 2 de Experiencias.",
        "img": "assets/img/about.jpg"
    },
    "voluntarios": [
        {
            "name": "Nombre Voluntario 1",
            "position": "Cargo Voluntario 1",
            "description": "Descripción Voluntario 1",
            "img": "assets/img/trainers/trainer-1.jpg",
            "facebook": "https://www.facebook.com/",
            "instagram": "https://www.instagram.com/",
            "linkedin": "https://www.linkedin.com/" 
        },
        {
            "name": "Nombre Voluntario 2",
            "position": "Cargo Voluntario 2",
            "description": "Descripción Voluntario 2",
            "img": "assets/img/trainers/trainer-2.jpg",
            "facebook": "https://www.facebook.com/",
            "instagram": "https://www.instagram.com/",
            "linkedin": "https://www.linkedin.com/" 
        },
        {
            "name": "Nombre Voluntario 3",
            "position": "Cargo Voluntario 3",
            "description": "Descripción Voluntario 3",
            "img": "assets/img/trainers/trainer-3.jpg",
            "facebook": "https://www.facebook.com/",
            "instagram": "https://www.instagram.com/",
            "linkedin": "https://www.linkedin.com/" 
        }
    ],
    "adopciones": [
        {
            "name": "Nombre Adopción 1",
            "description": "Descripción Adopción 1",
            "img": "assets/img/adopciones-1.jpg",
            "likes": 50
        },
        {
            "name": "Nombre Adopción 2",
            "description": "Descripción Adopción 2",
            "img": "assets/img/adopciones-2.jpg",
            "likes": 60
        },
        {
            "name": "Nombre Adopción 3",
            "description": "Descripción Adopción 3",
            "img": "assets/img/adopciones-3.jpg",
            "likes": 70
        }
    ]
}

let v = Object.keys(values.voluntarios).length;
let v1 = Object.keys(values.adopciones).length;
var s = '';
var s1 = '';
console.log(v1);

document.getElementById("activities").getElementsByTagName('h3')[0].innerHTML = values["actividades"]["subtitle"];
document.getElementById("activities").getElementsByTagName('p')[0].innerHTML = values["actividades"]["text1"];
document.getElementById("activities").getElementsByTagName('ul')[0].innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["actividades"]["bullets"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("activities").getElementsByTagName('p')[1].innerHTML = values["actividades"]["text2"];
document.getElementById("activities").getElementsByTagName('img')[0].src = values["actividades"]["img"];

document.getElementById("alianzas").getElementsByTagName('h3')[0].innerHTML = values["alianzas"]["subtitle"];
document.getElementById("alianzas").getElementsByTagName('p')[0].innerHTML = values["alianzas"]["text1"];
document.getElementById("alianzas").getElementsByTagName('ul')[0].innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["alianzas"]["bullets"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("alianzas").getElementsByTagName('p')[1].innerHTML = values["alianzas"]["text2"];
document.getElementById("activities").getElementsByTagName('img')[0].src = values["actividades"]["img"];

document.getElementById("experiencias").getElementsByTagName('h3')[0].innerHTML = values["experiencias"]["subtitle"];
document.getElementById("experiencias").getElementsByTagName('p')[0].innerHTML = values["experiencias"]["text1"];
document.getElementById("experiencias").getElementsByTagName('ul')[0].innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["experiencias"]["bullets"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("experiencias").getElementsByTagName('p')[1].innerHTML = values["experiencias"]["text2"];
document.getElementById("activities").getElementsByTagName('img')[0].src = values["actividades"]["img"];

for (var i = 0; i < v; i++) {
    s += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch"><div class="member"><img src="'
            +values.voluntarios[i]["img"]
            +'" class="img-fluid" alt=""><div class="member-content"><h4>'
            +values.voluntarios[i]["name"]
            +'</h4><span>'+values.voluntarios[i]["position"]+'</span><p>'
            +values.voluntarios[i]["description"]
            +'</p><div class="social"><a href="'
            +values.voluntarios[i]["instagram"]
            +'"><i class="bi bi-instagram"></i></a><a href="'
            +values.voluntarios[i]["facebook"]
            +'"><i class="bi bi-facebook"></i></a><a href="'
            +values.voluntarios[i]["linkedin"]
            +'"><i class="bi bi-linkedin"></i></a></div></div></div></div>';
}
document.getElementById("voluntarios").innerHTML = s;
for (var j = 0; j < v1; j++) {
    s1 += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch"><div class="course-item"><img src="'
            +values.adopciones[j]["img"]
            +'" class="img-fluid" alt="..."><div class="course-content"><h3>'
            +values.adopciones[j]["name"]
            +'</h3><p>'
            +values.adopciones[j]["description"]
            +'</p><div class="trainer d-flex justify-content-between align-items-center">'
            +'<div class="trainer-rank d-flex align-items-center"><i class="bx bx-heart"></i>&nbsp;' // TODO: Add Functionality
            +values.adopciones[j]["likes"]+'&nbsp;&nbsp;</div>'
            +'<div class="trainer-profile d-flex align-items-center"><a href="'
            +"#"// TODO: Add Functionality
            +'" class="fa fa-facebook"></a><a href="'
            +"#"// TODO: Add Functionality
            +'" class="fa fa-google"></a><a href="'
            +"#"// TODO: Add Functionality
            +'" class="fa fa-link"></a></div></div></div></div></div>';
}
document.getElementById("adopciones").innerHTML = s1;
