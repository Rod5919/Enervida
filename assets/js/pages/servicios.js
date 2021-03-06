values = {
    "amb":{
        "beneficios": ['Mientras más reduzcamos la    huella de carbono, más amigables con el planeta somos.',
                       'Disminución de los gases de efecto invernadero.',
                       'Si conocemos nuestra huella de carbono, el de los productos que consumimos y de las empresas en las que trabajamos.',
                      ],
        "servicios": ['Calculamos tu huella de carbono para conocer la magnitud de tus emisiones',
                     ],
        "proyectos": ['Capacitación y sensibilización de las personas.',
                      'Implementar medidas para disminuirla hasta llegar a la neutralidad (la situación en la que no se contamina).',
                     ]
    },
    "tec":{
        "beneficios": ['Mientras más eficientes somos en el uso de nuestros recursos, más competitivos somos en el aspecto productivo.',
                       'La buena planificación energética nos permite                       impulsar el desarrollo productivo e industrial, maximizando rendimientos y contaminando menos.',
                       '(Eficiencia energética) No se trata de sólo ahorrar energía, sino de utilizarla en menos cantidad, pero sin disminuir el confort de vida y de manera más productiva.'
                      ],
        "servicios": ['Mejoramos el acceso a la energía para el área rural.',
                      'Analizamos sus redes de electricidad para determinar los aspectos a mejorar y lograr ahorros.',
                      '(Auditorías energéticas) Sólo cuando conocemos la cantidad de energía que se utiliza en nuestros procesos y su eficiencia, podemos definir acciones concretas                      para asegurarnos de mejorar la eficiencia.',
                     ],
        "proyectos": ['Diseñamos, ejecutamos y monitoreamos proyectos de energía solar aplicados a distintas necesidades: uso doméstico, desarrollo productivo, educativo, académico, salud, social, etc.',
                     ]
    },
    "cys":{
        "beneficios": ['cys-ben 1',
                       'cys-ben 2',
                       'cys-ben 3',
                      ],
        "servicios": ['Para muchos desconocida, la energía solar puede cambiar tu estilo de vida. Conócela con nuestras capacitaciones totalmente prácticas.',
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

function adjust_window(id) {
    window.scrollBy(0, document.getElementById(id).getBoundingClientRect()['y']-150);
}

window.addEventListener('load', function () {
    if (window.location.href.toString().includes('#')) {
        adjust_window(window.location.href.toString().split('#')[1])
    }
})
