window.button = document.querySelector('#btn-upload');

import PostData from '../../js/modules/PostData.js'
import GetData from '../../../../assets/js/pages/modules/GetData.js'

const API = "../../../../data/countries.json";

GetData(API, (values) => {
    for (let index = 1; index <= Object.keys(values).length; index++) {
        $("#pets").append('<option value="'+values[index]+'">'+values[index]+'</option>')
    }
})

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