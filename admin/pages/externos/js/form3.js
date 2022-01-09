window.button = document.querySelector('#btn-upload');

import PostData from '../../js/modules/PostData.js'
import GetData from '../../../../assets/js/pages/modules/GetData.js'

const API = "../../../../data/countries.json";

GetData(API, (values) => {
    for (let index = 1; index <= Object.keys(values).length; index++) {
        $("#pets").append('<option value="'+values[index]+'">'+values[index]+'</option>')
    }
})

window.button.onclick = function() {
    
    PostData(API,{
      nombre: $("#nombre"),
      contacto: $("#contacto"),
      actividad: $("#actividad"),
      pais: $("#pets").find(":selected").text().val()
  },[
    "nombre",
    "contacto",
    "actividad",
    "pais"
  ]);
}
