values = {
    "1":{
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
        }
    },
    "2":{
        "1": {
            "title": "alianzas title 1",
            "summary": "summary 1",
            "url": "#1"
        },
        "2": {
            "title": "alianzas title 2",
            "summary": "summary 2",
            "url": "#2"
        },
        "3": {
            "title": "alianzas title 3",
            "summary": "summary 3",
            "url": "#3"
        },
        "4": {
            "title": "alianzas title 4",
            "summary": "summary 4",
            "url": "#4"
        },
        "5": {
            "title": "alianzas title 5",
            "summary": "summary 5",
            "url": "#5"
        },
        "6": {
            "title": "alianzas title 6",
            "summary": "summary 6",
            "url": "#6"
        }
    },
    "3":{
        "1": {
            "title": "experiencias title 1",
            "summary": "summary 1",
            "url": "#1"
        },
        "2": {
            "title": "experiencias title 2",
            "summary": "summary 2",
            "url": "#2"
        },
        "3": {
            "title": "experiencias title 3",
            "summary": "summary 3",
            "url": "#3"
        },
        "4": {
            "title": "experiencias title 4",
            "summary": "summary 4",
            "url": "#4"
        },
        "5": {
            "title": "experiencias title 5",
            "summary": "summary 5",
            "url": "#5"
        },
        "6": {
            "title": "experiencias title 6",
            "summary": "summary 6",
            "url": "#6"
        }
    },
    "4":{
        "1": {
            "title": "voluntariados title 1",
            "summary": "summary 1",
            "url": "#1"
        },
        "2": {
            "title": "voluntariados title 2",
            "summary": "summary 2",
            "url": "#2"
        },
        "3": {
            "title": "voluntariados title 3",
            "summary": "summary 3",
            "url": "#3"
        },
        "4": {
            "title": "voluntariados title 4",
            "summary": "summary 4",
            "url": "#4"
        },
        "5": {
            "title": "voluntariados title 5",
            "summary": "summary 5",
            "url": "#5"
        },
        "6": {
            "title": "voluntariados title 6",
            "summary": "summary 6",
            "url": "#6"
        }
    },
    "5":{
        "1": {
            "title": "adopciones title 1",
            "summary": "summary 1",
            "url": "#1"
        },
        "2": {
            "title": "adopciones title 2",
            "summary": "summary 2",
            "url": "#2"
        },
        "3": {
            "title": "adopciones title 3",
            "summary": "summary 3",
            "url": "#3"
        },
        "4": {
            "title": "adopciones title 4",
            "summary": "summary 4",
            "url": "#4"
        },
        "5": {
            "title": "adopciones title 5",
            "summary": "summary 5",
            "url": "#5"
        },
        "6": {
            "title": "adopciones title 6",
            "summary": "summary 6",
            "url": "#6"
        },
        "7": {
            "title": "adopciones title 7",
            "summary": "summary 7",
            "url": "#7"
        }
    },
}

function add_news(value){
    var div = document.createElement("div");
    div.className = "dashboard"
    div.innerHTML = '<a href="'+value["url"]+
                    '"><h4>'+value["title"]+
                    '</h4><p>'+value["summary"]+'</p></a>';
    document.getElementById("list").appendChild(div)
}

function refresh(num) {
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

refresh(window.location.href.toString().slice(-1))

