import PostData from "./modules/PostData.js";
import readURL from "./modules/readURL.js";

window.button = document.querySelector("#btn-upload");
const d = new Date();
const API = "../../../api/posts/create.php";

const post = new PostData();


window.button.onclick = async () => {
  const data = {
    title: $("#titular").val(),
    summary: ($("#resumen").val()).toString().splice(0,200),
    content: $("#resumen").val(),
    date: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`,
    url: "",
    img: document.querySelector("#blah").src,
  };
  const requireds = [
    "title",
    "content"
  ];
  post.post(data,requireds);
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
