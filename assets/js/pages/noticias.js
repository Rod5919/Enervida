let values = {};
let all_values = {};
let counter = 0;
let more = document.createElement("div");
more.style.display = "flex";
more.style.justifyContent = "center";
more.style.margin = "20px 0";
more.style.marginRight = "40px";
more.innerHTML =
  '<button type="button" class="btn-more" onclick="getAllData();">Ver más...</button>';
more.className = "center-more";

function shortener(x, endline) {
  x[7] += endline ? "<br>" : "";
  x = x.slice(0, 14).join(" ");
  if (x[x.length - 1] === ".") x += "..";
  else x += "...";
  return x;
}

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

function updateHero() {
  document.getElementById("hero").getElementsByTagName("h1")[0].innerHTML =
    values["body"][0]["title"];
  document.getElementById("hero").getElementsByTagName("h2")[0].innerHTML =
    shortener(values["body"][0]["summary"].split(" "), true);
  document.getElementById("hero").getElementsByTagName("a")[0].href =
    values["body"][0]["url"];
  document.getElementById("hero").style =
    `background: url("` + values["body"][0]["img"] + `") top center;`;
}

function modifier(num) {
  document
    .getElementById("art-" + num)
    .getElementsByTagName("h3")[0].innerHTML = values["body"][num]["title"];
  document.getElementById("art-" + num).getElementsByTagName("p")[0].innerHTML =
    shortener(values["body"][num]["summary"].split(" "), false);
  document.getElementById("art-" + num).getElementsByTagName("img")[0].src =
    values["body"][num]["img"];
  document
    .getElementById("art-" + num)
    .getElementsByClassName("likes")[0].innerHTML =
    values["body"][num]["likes"];
  document
    .getElementById("art-" + num)
    .getElementsByClassName("date")[0].innerHTML = transDate(
    values["body"][num]["date"]
  );
  document
    .getElementById("art-" + num)
    .getElementsByClassName("fa-facebook")[0].href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(values["body"][num]["url"]);
  if (values["body"][num]["liked"]) {
    document.getElementById("like-" + num).classList.remove("bx-heart");
    document.getElementById("like-" + num).classList.add("bi-heart-fill");
  }
}

function getData() {
  var request = new XMLHttpRequest();

  request.open("GET", "../../../api/posts/read.php");

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log("Response")
      values = JSON.parse(this.responseText);
      console.log(values);
      updateHero();
      for (let i = 0; i < 3; i++) {
        modifier((i + 1).toString());
      }
    }
  };

  request.send();
}

function add_news(value) {
  console.log("addnews", value);
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

function getAllData() {
  var request = new XMLHttpRequest();

  request.open("GET", "../../../api/posts/read.php");

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let newsLength = JSON.parse(this.responseText).itemCount;

      counter += 10;

      counter = newsLength - 4;

      counter = counter > 14 ? 14 : counter;

      all_values = JSON.parse(this.responseText);
      document.getElementById("list").innerHTML = "";
      for (let index = 4; index < counter; index++) {
        add_news(all_values["body"][index]);
      }
      if (counter < Object.keys(JSON.parse(this.responseText)).length) {
        document.getElementById("list").appendChild(more);
      }
    }
  };
  request.send();
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

getData();
getAllData();
// transDate("2021-12-09 00:19:12");
// auxData();
