window.button = document.querySelector('#btn-upload');

const API = "../../../../data/news.json";

import PostData from '../../js/modules/PostData.js'
import readURL from '../../js/modules/readURL.js'

window.button.onclick = function() {
  if ($('#titular').val() && $('#resumen').val() && document.querySelector("#blah").src) {
    PostData(API,{
        nombre: $("#nombre").val(),
        apellido: $("#apellido").val(),
        resumen: $("#resumen").val(),
        img: document.querySelector("#blah").src,
        whatsapp: $("#whatsapp").val(),
        facebook: $("#facebook").val(),
        linkedIn: $("#linkedIn").val(),
        youtube: $("#youtube").val(),
        instagram: $("#instagram".val())
    });
  }
}

$('#blah').hide();

document.querySelector("#file_upload_id").addEventListener('change', function () {
  window.uploadIMG(document.querySelector("#file_upload_id"), '#blah');
})

window.uploadIMG = readURL;