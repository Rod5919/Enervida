window.button = document.querySelector('#btn-upload');

const API = "../../../data/news.json";

import PostData from './modules/PostData.js'
import readURL from './modules/readURL.js'

window.button.onclick = function() {
    PostData(API,
      {
      titular: $('#titular').val(),
      resumen: $('#resumen').val(),
      img: document.querySelector("#blah").src
    }, 
    [
      "titular",
      "resumen"
    ]);
}

$('#blah').hide();

document.querySelector("#file_upload_id").addEventListener('change', function () {
  window.uploadIMG(document.querySelector("#file_upload_id"), '#blah');
})
window.uploadIMG = readURL;

$("#btn-upload").submit(function(e) {
    alert("Form submitted");
});