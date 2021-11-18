let counter = 1;
let values = {
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
    for (const [key, value] of Object.entries(values)) {
        add_news(key, value, counter);
    }
    if (parseInt(Object.keys(values).slice(-1)) > counter*10){
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

