values = {
    "amb":{
        "beneficios": ['amb-ben 1',
                       'amb-ben 2',
                       'amb-ben 3',
                      ],
        "servicios": ['amb-ser 1',
                      'amb-ser 2',
                      'amb-ser 3',
                     ],
        "proyectos": ['amb-pro 1',
                      'amb-pro 2',
                      'amb-pro 3',
                     ]
    },
    "tec":{
        "beneficios": ['tec-ben 1',
                       'tec-ben 2',
                       'tec-ben 3',
                      ],
        "servicios": ['tec-ser 1',
                      'tec-ser 2',
                      'tec-ser 3',
                     ],
        "proyectos": ['tec-pro 1',
                      'tec-pro 2',
                      'tec-pro 3',
                     ]
    },
    "cys":{
        "beneficios": ['cys-ben 1',
                       'cys-ben 2',
                       'cys-ben 3',
                      ],
        "servicios": ['cys-ser 1',
                      'cys-ser 2',
                      'cys-ser 3',
                     ],
        "proyectos": ['cys-pro 1',
                      'cys-pro 2',
                      'cys-pro 3',
                     ]
    },
    "tel":{
        "beneficios": ['tel-ben 1',
                       'tel-ben 2',
                       'tel-ben 3',
                      ],
        "servicios": ['tel-ser 1',
                      'tel-ser 2',
                      'tel-ser 3',
                     ],
        "proyectos": ['tel-pro 1',
                      'tel-pro 2',
                      'tel-pro 3',
                     ]
    },
    "bio":{
        "beneficios": ['bio-ben 1',
                       'bio-ben 2',
                       'bio-ben 3',
                      ],
        "servicios": ['bio-ser 1',
                      'bio-ser 2',
                      'bio-ser 3',
                     ],
        "proyectos": ['bio-pro 1',
                      'bio-pro 2',
                      'bio-pro 3',
                     ]
    }
};

document.getElementById("amb-ben").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["amb"]["beneficios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("amb-ser").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["amb"]["servicios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("amb-pro").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["amb"]["proyectos"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';

document.getElementById("tec-ben").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["tec"]["beneficios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("tec-ser").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["tec"]["servicios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("tec-pro").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["tec"]["proyectos"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';

document.getElementById("cys-ben").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["cys"]["beneficios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("cys-ser").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["cys"]["servicios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("cys-pro").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["cys"]["proyectos"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';

document.getElementById("tel-ben").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["tel"]["beneficios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("tel-ser").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["tel"]["servicios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("tel-pro").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["tel"]["proyectos"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';

document.getElementById("bio-ben").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["bio"]["beneficios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("bio-ser").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["bio"]["servicios"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
document.getElementById("bio-pro").innerHTML = '<li><i class="bi bi-check-circle"></i>'+values["bio"]["proyectos"].join('</li>\n<li><i class="bi bi-check-circle"></i>')+'</li>';
