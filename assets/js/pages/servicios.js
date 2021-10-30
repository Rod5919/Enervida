values = {
    "bio": {
        "beneficios": ['<li><i class="bi bi-check-circle"></i>perro 1</li>',
                       '<li><i class="bi bi-check-circle"></i>perro 2</li>',
                       '<li><i class="bi bi-check-circle"></i>perro 3</li>',
                      ],
        "servicios": '<li><i class="bi bi-check-circle"></i>ah perro</li>',
        "proyectos": '<li><i class="bi bi-check-circle"></i>aaaah peeeeerrroooo</li>'
    }
};

document.getElementById("bio-ben").innerHTML = values["bio"]["beneficios"].join("\n");