let val = {};
let counter = 0;
let api = "../../../data/volunteers.json";
let api_a = "../../../data/adoptions.json";

//#region Spotlight
function getData(api) {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("GET", api);

    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            // console.log(JSON.parse(this.responseText));
            val = JSON.parse(this.responseText);
            updateVolunteers();
        }
    };
    // Sending the request to the server
    request.send();
}

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
    "experiencias": {
        "subtitle": "Subtítulo de Experiencias",
        "text1": "Texto 1 de Experiencias.",
        "bullets": ['Bullet 1 de Experiencias.',
                    'Bullet 2 de Experiencias.',
                    'Bullet 3 de Experiencias.',
                    ],
        "text2": "Texto 2 de Experiencias.",
        "img": "assets/img/about.jpg"
    }
}
adoptions = {
    "1": {
        "name": "adoption 1",
        "description": "adopt description 1",
        "img": "assets/img/adopciones-1.jpg"
    },
    "2": {
        "name": "adoption 2",
        "description": "adopt description 2",
        "img": "assets/img/adopciones-2.jpg"
    },
    "3": {
        "name": "adoption 3",
        "description": "adopt description 3",
        "img": "assets/img/adopciones-3.jpg"
    },
    "4": {
        "name": "adoption 4",
        "description": "adopt description 4",
        "img": "assets/img/adopciones-1.jpg"
    },
    "5": {
        "name": "adoption 5",
        "description": "adopt description 5",
        "img": "assets/img/adopciones-1.jpg"
    },
    "6": {
        "name": "adoption 6",
        "description": "adopt description 6",
        "img": "assets/img/adopciones-1.jpg"
    }
}

function updateActivities() {
    document.getElementById("activities").getElementsByTagName('h3')[0].innerHTML = values["actividades"]["subtitle"];
    document.getElementById("activities").getElementsByTagName('p')[0].innerHTML = values["actividades"]["text1"];
    document.getElementById("activities").getElementsByTagName('ul')[0].innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["actividades"]["bullets"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
    document.getElementById("activities").getElementsByTagName('p')[1].innerHTML = values["actividades"]["text2"];
    document.getElementById("activities").getElementsByTagName('img')[0].src = values["actividades"]["img"];
}

function updateExperiences(){
    document.getElementById("experiencias").getElementsByTagName('h3')[0].innerHTML = values["experiencias"]["subtitle"];
    document.getElementById("experiencias").getElementsByTagName('p')[0].innerHTML = values["experiencias"]["text1"];
    document.getElementById("experiencias").getElementsByTagName('ul')[0].innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["experiencias"]["bullets"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
    document.getElementById("experiencias").getElementsByTagName('p')[1].innerHTML = values["experiencias"]["text2"];
    document.getElementById("experiencias").getElementsByTagName('img')[0].src = values["experiencias"]["img"];
}

function updateVolunteers(){
    let v = Object.keys(volunteers).length;
    var s = '';
    for (var i = 0; i < v; i++) {
        s += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch"><div class="member"><img src="'
                +volunteers[i+1]["img"]
                +'" class="img-fluid" alt=""><div class="member-content"><h4>'
                +volunteers[i+1]["name"]
                +'</h4><span>'+volunteers[i+1]["position"]+'</span><p>'
                +volunteers[i+1]["description"]
                +'</p><div class="social"><a href="'
                +volunteers[i+1]["instagram"]
                +'"><i class="bi bi-instagram"></i></a><a href="'
                +volunteers[i+1]["facebook"]
                +'"><i class="bi bi-facebook"></i></a><a href="'
                +volunteers[i+1]["linkedin"]
                +'"><i class="bi bi-linkedin"></i></a></div></div></div></div>';
    }
    document.getElementById("voluntarios").innerHTML = s;
}

function updateAdoptions(){
    let v1 = Object.keys(adoptions).length;
    var s1 = '';
    for (var j = 0; j < v1; j++) {
        s1 += '<div class="col-lg-4 col-md-6 d-flex align-items-stretch"><div class="course-item"><img src="'
                +adoptions[j+1]["img"]
                +'" class="img-fluid" alt="..."><div class="course-content"><h3>'
                +adoptions[j+1]["name"]
                +'</h3><p>'
                +adoptions[j+1]["description"]
                +'</p><div class="trainer d-flex justify-content-between align-items-center">'
                +'<div class="trainer-profile d-flex align-items-center"><a href="'
                +"#"// TODO: Add Functionality
                +'" class="fa fa-facebook"></a><a href="'
                +"#"// TODO: Add Functionality
                +'" class="fa fa-google"></a><a href="'
                +"#"// TODO: Add Functionality
                +'" class="fa fa-link"></a></div></div></div></div></div>';
    }
    document.getElementById("adopciones").innerHTML = s1;
}

updateActivities();
updateExperiences();
getData(api);
// getData(api_a, adoptions);