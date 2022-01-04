import GetData from "./modules/GetData.js";
const api = "../../../data/dashboard.json"
const values = GetData(api, refresh);

function add_news(value){
    var div = document.createElement("div");
    div.className = "dashboard"
    div.innerHTML = '<a href="'+value["url"]+
                    '"><h4>'+value["title"]+
                    '</h4><p>'+value["summary"]+'</p></a>';
    document.getElementById("list").appendChild(div)
}

function refresh(values) {
    let num = parseInt(window.location.href.toString().slice(-1))? window.location.href.toString().slice(-1) : 1;
    
    console.log(values);
    console.log(num);
    console.log(Object.entries(values[num]));
    document.getElementById("list").innerHTML = "";
    for (const [key, value] of Object.entries(values[num])) {
      add_news(value);
    }
    for (let index = 0; index < 5; index++) {
        document.getElementsByClassName('submenu-item')[index].classList.remove("active");
        if (parseInt(num)-1 ==index) {
            document.getElementsByClassName('submenu-item')[index].classList.add("active");
        }
    }
}



