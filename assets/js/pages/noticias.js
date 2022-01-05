import GetData from "./modules/GetData.js";

var api = "../../../data/news.json";
var counter = 0;

// Modules

function displayFullName() {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("GET", "/");

    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            document.getElementById("result").innerHTML = this.responseText;
        }
    };

    // Sending the request to the server
    request.send();
}


function shortener(x, endline) {
  x[7] += endline ? "<br>" : "";
  x = x.slice(0, 14).join(" ");
  if (x[x.length - 1] === ".") x += "..";
  else x += "...";
  return x;
}

function updateHero(values) {
  document.getElementById("hero").getElementsByTagName("h1")[0].innerHTML =
    values["title"];
  document.getElementById("hero").getElementsByTagName("h2")[0].innerHTML =
    shortener(values["summary"].split(" "), true);
  document.getElementById("hero").getElementsByTagName("a")[0].href =
    values["url"];
  document.getElementById("hero").style =
    `background: url("` + values["img"] + `") top center;`;
}

function modifier(values, num) {
  document
    .getElementById("art-" + num)
    .getElementsByTagName("h3")[0].innerHTML = values[`article ${num}`]["title"];

  document.getElementById("art-" + num).getElementsByTagName("p")[0].innerHTML =
    shortener(values[`article ${num}`]["summary"].split(" "), false);

  document.getElementById("art-" + num).getElementsByTagName("img")[0].src =
    values[`article ${num}`]["img"];

  document
    .getElementById("art-" + num)
    .getElementsByClassName("likes")[0].innerHTML =
    values[`article ${num}`]["likes"];
  
  document
    .getElementById("art-" + num)
    .getElementsByClassName("date")[0].innerHTML = transDate(
    values[`article ${num}`]["date"]
  );
  
  document
    .getElementById("art-" + num)
    .getElementsByClassName("fa-facebook")[0].href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(values[`article ${num}`]["url"]);
  
  if (values[`article ${num}`]["liked"]) {
    document.getElementById("like-" + num).classList.remove("bx-heart");
    document.getElementById("like-" + num).classList.add("bi-heart-fill");
  }
}

function add_news(value) {
  console.log("added")
  console.table(value);
  var div = document.createElement("div");
  div.className = "dashboard";
  div.innerHTML =
    '<a href="' +
    value["url"] +
    '"><h4>' +
    value["title"] +
    "</h4><p>" +
    value["summary"] +
    "</p></a>";
  document.getElementById("list").appendChild(div);
}

function transDate(date) {
  let newDate = new Date(date);
  let formatDate;
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abrl",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  formatDate =
    newDate.getDay() +
    " de " +
    months[newDate.getMonth()] +
    ", " +
    newDate.getFullYear();

  return formatDate;
}

// Get Data

class updateNews {
  constructor(values) {
    this.values = values;

    updateHero(values.highlighted);

    for (let i = 0; i < 3; i++) {
      modifier(values, (i + 1).toString());
    }

    let more = document.createElement("div");
    more.style.display = "flex";
    more.style.justifyContent = "center";
    more.style.margin = "20px 0";
    more.style.marginRight = "40px";
    more.innerHTML =
      '<button id="more-news" type="button" class="btn-more">Ver más...</button>';
    more.className = "center-more";
    more.onclick = () => {
      counter++;
      updateNews(values);
    };
    counter += 10;
    counter = Object.keys(values).length - 7;
    counter = counter > 11 ? 11 : counter;

    document.getElementById("list").innerHTML = "";
    for (let index = 4; index < counter; index++) {
      add_news(values[index]);
    }
    if (counter < Object.keys(values).length) {
      document.getElementById("list").appendChild(more);
    }
  }
}

// DOM
function like(id) {
  // alert("art-"+(id.slice(-1)));
  if (document.getElementById(id).classList[1] === "bx-heart") {
    document.getElementById(id).classList.remove("bx-heart");
    document.getElementById(id).classList.add("bi-heart-fill");
    document
      .getElementById("art-" + id.slice(-1))
      .getElementsByClassName("likes")[0].innerHTML++;
  } else {
    document.getElementById(id).classList.remove("bi-heart-fill");
    document.getElementById(id).classList.add("bx-heart");
    document
      .getElementById("art-" + id.slice(-1))
      .getElementsByClassName("likes")[0].innerHTML--;
  }
  // TODO: send 1 more like
}


GetData(api,updateNews);

