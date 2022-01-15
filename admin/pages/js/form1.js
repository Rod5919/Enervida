window.button = document.querySelector("#btn-upload");
const d = new Date();
const API = "../../../api/posts/create.php";

import PostData from "./modules/PostData.js";
import readURL from "./modules/readURL.js";

window.button.onclick = async () => {
  var data = new FormData();
  const bodyJson = {
    title: $("#titular").val(),
    summary: $("#resumen").val(),
    content: $("#resumen").val(),
    date: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`,
    url: "",
    img: document.querySelector("#blah").src,
  };

  for (var key in bodyJson) {
    console.log(bodyJson[key]);
    data.append(key, bodyJson[key]);
  }

  for (var key of data.entries()) {
    console.log(key[0] + ", " + key[1]);
    alert("", "fetched");
  }
  const settings = {
    method: "POST",
    body: data,
  };
  const fetchResponse = await fetch(API, settings);
  const responseData = await fetchResponse.json();
  alert("", "posted");
  return data;
  try {
  } catch (e) {
    return e;
  }


};

$("#blah").hide();

document
  .querySelector("#file_upload_id")
  .addEventListener("change", function () {
    window.uploadIMG(document.querySelector("#file_upload_id"), "#blah");
  });
window.uploadIMG = readURL;

$("#btn-upload").submit(function (e) {
  e.preventDefault(); // <==stop page refresh==>
});
.0