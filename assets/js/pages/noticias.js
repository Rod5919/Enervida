let values = {};

function getData() {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("GET", "/data/news.json");

    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            console.log(JSON.parse(this.responseText));
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

function like(id) {
    // alert("art-"+(id.slice(-1)));
    if(document.getElementById(id).classList[1] === "bx-heart"){
        document.getElementById(id).classList.remove('bx-heart');
        document.getElementById(id).classList.add('bi-heart-fill');
        document.getElementById("art-"+(id.slice(-1))).getElementsByClassName("likes")[0].innerHTML++;
    }else{
        document.getElementById(id).classList.remove('bi-heart-fill');
        document.getElementById(id).classList.add('bx-heart');
        document.getElementById("art-"+(id.slice(-1))).getElementsByClassName("likes")[0].innerHTML--;
    }
    // TODO: send 1 more like
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
    document.getElementById("art-"+num).getElementsByTagName('img')[0].src = values["article "+num]["img"];
    document.getElementById("art-"+num).getElementsByClassName("likes")[0].innerHTML = values["article "+num]["likes"];
    document.getElementById("art-"+num).getElementsByClassName("date")[0].innerHTML = values["article "+num]["date"];
    document.getElementById("art-"+num).getElementsByClassName("fa-facebook")[0].href = "https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(values["article "+num]["url"]);
    if(values["article "+num]["liked"]){
        document.getElementById("like-"+num).classList.remove('bx-heart');
        document.getElementById("like-"+num).classList.add('bi-heart-fill');
    }
}
getData();
