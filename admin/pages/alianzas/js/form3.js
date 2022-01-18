window.button = document.querySelector('#btn-upload');

import PostData from '../../js/modules/PostData.js'
import readURL from '../../js/modules/readURL.js'

const API = "../../../../data/countries.json";


const d = new Date();
const post = new PostData(API);

window.button.onclick = async () => {

  // original content
  let or_con = $("#resumen").val().toString();
  let or_title = $("#titular").val()

  const data = {
    title: or_title,
    summary: or_con.substring(0,200),
    content: or_con,
    date: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`,
    url: "",
    img: document.querySelector("#blah").src,
  };
  const requireds = ["title", "content"];

  post.post(data, requireds);
};

$('#blah').hide();

document.querySelector("#file_upload_id").addEventListener('change', function () {
  window.uploadIMG(document.querySelector("#file_upload_id"), '#blah');
})

window.uploadIMG = readURL;

$("#btn-upload").submit(function(e) {
    alert("Form submitted");
});

$("#btn-upload").submit(function(e) {
    alert("Form submitted");
});