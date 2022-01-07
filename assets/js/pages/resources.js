let values = {};
let all_values = {}
let counter = 0;
let more = document.createElement("div");
let api = "../../../data/resources.json";

more.style.display = "flex";
more.style.justifyContent = "center";
more.style.margin = "20px 0";
more.style.marginRight = "40px";
more.innerHTML = `<button type="button" class="btn-more" onclick="getAllData(\'${api}\')";">Ver más...</button>`;
more.className = "center-more";


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

getAllData(api);