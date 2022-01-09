window.button = document.querySelector('#btn-upload');

const API = "../../../../data/news.json";

import PostData from '../../js/modules/PostData.js'
import readURL from '../../js/modules/readURL.js'

window.button.onclick = function() {
  
    PostData(API,{
        nombre_institucional: $("#nombre-institucional").val(),
        sigla: $("#sigla").val(),
        descripcion: $("#descripcion").val(),
        img: document.querySelector("#blah").src,
        website: $("#website").val(),
        facebook: $("#facebook").val(),
        linkedin: $("#linkedin").val(),
        youtube: $("#youtube").val(),
        instagram: $("#instagram").val()
    },[
        "nombre_institucional",
        "sigla",
        "descripcion",
        "website",
    ]
    );
}

$('#blah').hide();

document.querySelector("#file_upload_id").addEventListener('change', function () {
  window.uploadIMG(document.querySelector("#file_upload_id"), '#blah');
})

window.uploadIMG = readURL;

$("#btn-upload").submit(function() {
    alert("Form submitted");
});