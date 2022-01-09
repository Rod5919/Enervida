window.button = document.querySelector('#btn-upload');

import PostData from '../../js/modules/PostData.js'
import readURL from '../../js/modules/readURL.js'

const API = "../../../../data/countries.json";


window.button.onclick = function() {
    
      PostData(API,{
        nombre_documento: $("#nombre-documento").val(),
        anio: $("#anio").val(),
        img: document.querySelector("#blah").src
      });
}


$('#blah').hide();

document.querySelector("#file_upload_id").addEventListener('change', function () {
  window.uploadIMG(document.querySelector("#file_upload_id"), '#blah');
})

window.uploadIMG = readURL;

$("#btn-upload").submit(function(e) {
    e.preventDefault();
});