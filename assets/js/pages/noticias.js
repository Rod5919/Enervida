let values = {};
let all_values = {}
let counter = 0;
let more = document.createElement("div");
let api = "../../../data/news.json";

more.style.display = "flex";
more.style.justifyContent = "center";
more.style.margin = "20px 0";
more.style.marginRight = "40px";
more.innerHTML = `<button type="button" class="btn-more" onclick="getAllData(\'${api}\')";">Ver más...</button>`;
more.className = "center-more";

//#region Spotlight
function getData(api) {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("GET", api);

    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            // console.log(JSON.parse(this.responseText));
            values = JSON.parse(this.responseText);
            updateHero();
            for (let i = 0; i < 3; i++) {
                modifier((i+1).toString());
            }
        }
    };

    // Sending the request to the server
    request.send();
}

function shortener(x, endline) {
    x[7] += endline?"<br>":"";
    x = (x.slice(0,14).join(" "));
    if (x[x.length-1] === ".") 
        x+="..";
    else
    x+="...";
    return x
}


function updateHero() {
    document.getElementById("hero").getElementsByTagName('h1')[0].innerHTML = values["highlighted"]["title"];
    document.getElementById("hero").getElementsByTagName('h2')[0].innerHTML = shortener(values["highlighted"]["summary"].split(" "),true);
    document.getElementById("hero").getElementsByTagName('a')[0].href = values["highlighted"]["url"];
    document.getElementById("hero").style = `background: url("`+values["highlighted"]["img"]+`") top center;`;
}

function modifier(num) {
    document.getElementById("art-"+num).getElementsByTagName('h3')[0].innerHTML = values["article "+num]["title"];
    document.getElementById("art-"+num).getElementsByTagName('p')[0].innerHTML = shortener(values["article "+num]["summary"].split(" "),false);
    document.getElementById("art-"+num).getElementsByTagName('a')[0].href = values["article "+num]["url"];
    document.getElementById("art-"+num).getElementsByTagName('img')[0].src = values["article "+num]["img"];
    document.getElementById("art-"+num).getElementsByClassName("date")[0].innerHTML = values["article "+num]["date"];
    document.getElementById("art-"+num).getElementsByClassName("fa-facebook")[0].href = "https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(values["article "+num]["url"]);
    document.getElementById("art-"+num).getElementsByClassName("fa-linkedin")[0].href = "https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(values["article "+num]["url"]);
    document.getElementById("art-"+num).getElementsByClassName("fa-link")[0].href = "#1";
    document.getElementById("art-"+num).getElementsByClassName("fa-link")[0].onclick = function(){copy_to_clipboard(values["article "+num]["url"], num);};
}

function getData() {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();
    
    // Instantiating the request object
    request.open("GET", "../../../data/news.json");
    
    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            // console.log(JSON.parse(this.responseText));
            values = JSON.parse(this.responseText);
            updateHero();
            for (let i = 0; i < 3; i++) {
                modifier((i+1).toString());
            }
        }
    };
    
    // Sending the request to the server
    request.send();
}
//#endregion Spotlight

function add_news(value){
    var div = document.createElement("div");
    div.className = "dashboard"
    div.innerHTML =`<a href="${value.url}">
                      <div>
                      <img src="${value.img}" alt="${value["title"]}">
                      <span>${value["date"]}</span>
                      </div>
                      <div>
                        <h4>${value["title"]}</h4>
                        <p>${value["summary"]}</p>
                      </div>
                    </a>`;
    document.getElementById("list").appendChild(div);
}

function copy_to_clipboard(url, num) {
    /* Get the text field */
    var copyText = url;
  
    console.log(url);
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
  
    /* Alert the copied text */
    console.log("Copied the text: " + copyText);

    alert("Link copiado");
}

function getAllData(api) {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();
    
    // Instantiating the request object
    request.open("GET", api);
    
    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            counter +=10;
            counter = Object.keys(JSON.parse(this.responseText)).length < counter ? Object.keys(JSON.parse(this.responseText)).length : counter;
            // console.log("counter");
            // console.log(counter);
            // console.log(JSON.parse(this.responseText));
            all_values = JSON.parse(this.responseText);

            document.getElementById("list").innerHTML = "";
            for (let index = 0; index < counter; index++) {
                // console.log(all_values[(index+1).toString()])
                add_news(all_values[(index+1).toString()]);
            }

            if (counter < Object.keys(JSON.parse(this.responseText)).length) {
                document.getElementById("list").appendChild(more);
            }
        }
    };
    // Sending the request to the server
    request.send();
}

getData(api);
getAllData(api);