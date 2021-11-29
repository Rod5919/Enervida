// TODO: Añadir fecha a las noticias con icono
// TODO: Añadir imagen a las noticias

let counter = 1;
values = {
    "highlighted": {
        "title": "NFTs: Wetin Non Fungible Token blockchain like Crypto be, why some dey worth millions?",
        "summary": 'NFTs na "one of a kind" thing for di digital world wey you fit buy or sell like any oda property but you no fit use hand hold am. Dem dey come in digital tokens wey be certificate of ownership for di digital assets. So e mean say na you own di rights to certain memes, tweets, digital artwork, etc even if dem still dey share am for social media. Look am like this, if you own di Mona Lisa painting no mean say pipo no fit buy di print of di . Or, e no mean say dem no fit take picture of di painting, but di original painting wey be one of a kind na di owner still get am. NFTs dey operate like crypto-currency on top say dem dey work with blockchain technology to keep record of who be di besin wey own dis NFT. You fit also add smart contract for NFT so when everr you sell am, for future, di creator (e.g, artist) go fit chop sometin inside.',
        "url": "https://www.bbc.com/pidgin/world-59055385",
        "img": "https://ichef.bbci.co.uk/news/800/cpsprodpb/12531/production/_121275057_nftwetinnonfungibletokenblockchainlikecryptobewhysomedeyworthmillions.jpg"
    },
    "article 1": {
        "title": "Semifinales de 'League of Legends' de 2021: enfrentamientos, fechas, horarios y dónde ver",
        "summary": "Este fin de semana se disputarán las semifinales del mundial de 'League of Lengeds'. O lo que es lo mismo, las dos series al mejor de 5 que decidirán quienes son los 2 mejores equipos del mundo. ¡Y tenemos muchas ganas de ver qué ocurre! Por un lado tendremos el enfrentamiento entre DAMWON KIA y T1, dos de los mejores equipos de corea y del mundo. Por la otra parte, Gen.G se batirá en duelo contra EDward Gaming en otra semifinal para la historia.",
        "url": "https://www.marca.com/esports/league-of-legends/2021/10/29/617c0cc1e2704e0eae8b45b6.html",
        "img": "https://phantom-marca.unidadeditorial.es/b9cf5dfe500d5dd5b0a0eaa45202fbc1/resize/660/f/webp/assets/multimedia/imagenes/2021/10/29/16355196538598.jpg",
        "liked": false,
        "likes": 12,
        "date": "22-nov-2021"
    },
    "article 2": {
        "title": "Video Friday: TurtleBot 4 Programacion backend ",
        "summary": `Cognitive Pilot's autonomous tech is now being integrated into production Kirovets K-7M tractors, and they've got big plans: "The third phase of the project envisages a fully self-driving tractor control mode without the need for human involvement. It includes group autonomous operation with a 'leader', the movement of a group of self-driving tractors on non-public roads, the autonomous movement of a robo-tractor paired with a combine harvester not equipped with an autonomous control system, and the use of an expanded set of farm implements with automated control and functionality to monitor their condition during operation."`,
        "url": "https://spectrum.ieee.org/video-friday-turtlebot-4",
        "img": "https://spectrum.ieee.org/media-library/an-irobot-roomba-create-3-with-a-computing-core-and-sensors-sitting-on-a-desk-with-an-overlay-that-says-turtlebot-4.png?id=27724603&amp;width=1920&amp;height=1080",
        "liked": false,
        "likes": 32,
        "date": "23-nov-2021"
        
    },
    "article 3": {
        "title": "¡La robótica no es aburrida! Conoce a Aziel Medina, ingeniera que te da hacks de tecnología",
        "summary": "Existen muchos tipos de ingenierías, algunas de ellas pueden confundirse, pero sin duda escuchar sobre ingeniería en robótica puede sorprendernos de inmediato. Aunque es una carrera que puede ser demandante, eso no implica que sea aburrida, algo de lo que se ha encargado de desmentir Aziel Medina. https://www.milenio.com/virales/aziel-medina-ingeniera-robotica-comparte-hacks-tiktok",
        "url": "https://www.milenio.com/virales/aziel-medina-ingeniera-robotica-comparte-hacks-tiktok",
        "img": "https://imagenes.milenio.com/F5x2rAiciaA2b4G7EsAWegcSHLY=/958x596/smart/https://www.milenio.com/uploads/media/2021/10/19/aziel-medina-demostrado-robotica-util.jpg",
        "liked": false,
        "likes": 99,
        "date": "24-nov-2021"
    },
};
let news = {
    "1": {
        "title": "activities title 1",
        "summary": "summary 1",
        "url": "#1"
    },
    "2": {
        "title": "activities title 2",
        "summary": "summary 2",
        "url": "#2"
    },
    "3": {
        "title": "activities title 3",
        "summary": "summary 3",
        "url": "#3"
    },
    "4": {
        "title": "activities title 4",
        "summary": "summary 4",
        "url": "#4"
    },
    "5": {
        "title": "activities title 5",
        "summary": "summary 5",
        "url": "#5"
    },
    "6": {
        "title": "activities title 6",
        "summary": "summary 6",
        "url": "#6"
    },
    "6": {
        "title": "activities title 7",
        "summary": "summary 7",
        "url": "#7"
    },
    "7": {
        "title": "activities title 8",
        "summary": "summary 8",
        "url": "#8"
    },
    "8": {
        "title": "activities title 9",
        "summary": "summary 9",
        "url": "#9"
    },
    "9": {
        "title": "activities title 10",
        "summary": "summary 10",
        "url": "#10"
    },
    "10": {
        "title": "activities title 11",
        "summary": "summary 11",
        "url": "#11"
    },
    "11": {
        "title": "activities title 12",
        "summary": "summary 12",
        "url": "#12"
    },
    "12": {
        "title": "activities title 13",
        "summary": "summary 13",
        "url": "#13"
    },
    "13": {
        "title": "activities title 14",
        "summary": "summary 14",
        "url": "#14"
    },
    "14": {
        "title": "activities title 15",
        "summary": "summary 15",
        "url": "#15"
    },
    "15": {
        "title": "activities title 16",
        "summary": "summary 16",
        "url": "#16"
    },
    "16": {
        "title": "activities title 17",
        "summary": "summary 17",
        "url": "#17"
    },
    "17": {
        "title": "activities title 18",
        "summary": "summary 18",
        "url": "#18"
    },
    "18": {
        "title": "activities title 19",
        "summary": "summary 19",
        "url": "#19"
    },
    "19": {
        "title": "activities title 20",
        "summary": "summary 20",
        "url": "#20"
    },
    "20": {
        "title": "activities title 21",
        "summary": "summary 21",
        "url": "#21"
    },
    "21": {
        "title": "activities title 22",
        "summary": "summary 22",
        "url": "#22"
    },
    "22": {
        "title": "activities title 23",
        "summary": "summary 23",
        "url": "#23"
    },
    "23": {
        "title": "activities title 24",
        "summary": "summary 24",
        "url": "#24"
    },
};

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

document.getElementById("hero").getElementsByTagName('h1')[0].innerHTML = values["highlighted"]["title"];
document.getElementById("hero").getElementsByTagName('h2')[0].innerHTML = shortener(values["highlighted"]["summary"].split(" "),true);
document.getElementById("hero").getElementsByTagName('a')[0].href = values["highlighted"]["url"];
document.getElementById("hero").style = `background: url("`+values["highlighted"]["img"]+`") top center;`;

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

modifier("1");
modifier("2");
modifier("3");



function add_news(key, value, counter){
    if (parseInt(key) < counter*10){
        var div = document.createElement("div");
        div.className = "dashboard";
        div.innerHTML = '<a href="'+value["url"]+
        '"><h4>'+value["title"]+
        '</h4><p>'+value["summary"]+'</p></a>';
        document.getElementById("list").appendChild(div)
    }
}

function refresh() {
    document.getElementById("list").innerHTML = "";
    for (const [key, value] of Object.entries(news)) {
        add_news(key, value, counter);
    }
    if (parseInt(Object.keys(news).slice(-1)) > counter*10){
        var div = document.createElement("div");
        div.className = "informacion-text";
        div.classList.add("more")
        div.innerHTML = '<a onclick="counter++;refresh();"><h3>Ver más</h3></a>';
        div.style.marginTop = "20px";
        div.style.marginBottom = "20px";
        document.getElementById("list").appendChild(div);
    }
}

refresh()