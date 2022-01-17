let values = {
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
        "beneficios": ['La energía eléctrica es el motor de la vida moderna, aprende a utilizarla con eficiencia para incrementar las utilidades de tu organización.',
                       'Tanto para agua potable como para riego de cultivos, el agua es de vital importancia.',
                       '(Reducción de huella de carbono)Todas nuestras actividades contaminan en cierto grado. Descubre cómo medir tu huella de carbono para adoptar medidas de disminución.',
                       '(Disminución de GEI) Descubre cómo puedes diseñar y ejecutar proyectos de reducción de emisiones de Gases de Efecto Invernadero, para disminuir tu huella.'
                      ],
        "servicios": ['Para muchos desconocida, la energía solar puede cambiar tu estilo de vida. Conócela con nuestras capacitaciones totalmente prácticas.',
                      'El bombeo solar brinda calidad de vida y uso digno.',
                      'Si tienes ambientes muy fríos en tu casa u oficina, aprender a usar la energía solar para calentarlos de manera fácil y gratuita.',
                     ],
        "proyectos": ['(Autoconsumo solar) Ya es una realidad en Bolivia. Conoce cómo disminuir tu factura de electricidad, incluso vender electricidad a tu proveedora de electricidad.',
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
        "beneficios": ['Disminuye costos de energía, es más ecológico, menos presión al SIN, etc.',
                       'El confort térmico no debería costar, ni contaminar más.',
                       'Conocer y aplicar criterios de energía solar pasiva, puede brindar mayor confort térmico a costo “cero”.',
                      ],
        "servicios": ['Asesoramos en la construcción de eco-viviendas, eco-escuelas, etc. Utilizamos técnicas de construcción para aprovechar la radiación solar.',
                      'Eliminamos estufas, calefacción, aires acondicionados, ventiladores, etc.',
                     ],
        "proyectos": ['El centro demostrativo de Achocalla es la primera vivienda en La Paz en la que se ha aplicado varios criterios de Arquitectura Solar Pasiva y activa para la autosostenibilidad.',
                      'A la fecha se tiene en proyecto el “1er conjunto habitacional de Achocalla con criterios de ASP”.',
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
