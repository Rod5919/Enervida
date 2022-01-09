window.button = document.querySelector('#btn-upload');

const API = "../../../../data/news.json";

import PostData from '../../js/modules/PostData.js'
import readURL from '../../js/modules/readURL.js'

window.button.onclick = function() {
  
    PostData(API,{
        nombre: $("#nombre").val(),
        edad: $("#edad").val(),
        resumen_1: $("#resumen_1").val(),
        img_1: document.querySelector("#blah1").src,
        pets: $("#pets").find(":selected").text().val(),
        resumen_2: $("#resumen_2").val(),
        img_2: document.querySelector("#blah2").src,
        nombre_adoptante: $("#nombre-adoptante").val(),
        whatsapp_adoptante: $("#whatsapp-adoptante".val())
    },[
      "nombre",
      "edad",
      "resumen_1",
      "img_1",
      "pets",
      "resumen_2",
      "img_2",
      "nombre_adoptante",
      "whatsapp_adoptante"
    ]);
}

$('#blah1').hide();
$('#blah2').hide();

document.querySelector("#file_upload_id_1").addEventListener('change', function () {
  window.uploadIMG(document.querySelector("#file_upload_id_1"), '#blah1');
})

document.querySelector("#file_upload_id_2").addEventListener('change', function () {
  window.uploadIMG(document.querySelector("#file_upload_id_2"), '#blah2');
})
window.uploadIMG = readURL;

$("#btn-upload").submit(function(e) {
    alert("Form submitted");
});