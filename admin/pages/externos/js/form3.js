function getData() {
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();

    // Instantiating the request object
    request.open("GET", "../../../../data/countries.json");

    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            // console.log(JSON.parse(this.responseText));
            values = JSON.parse(this.responseText);
            console.log(values);
            for (let index = 1; index <= Object.keys(values).length; index++) {
                console.log(values[index]);
                $("#pets").append('<option value="'+values[index]+'">'+values[index]+'</option>')
            }
        }
    };

    // Sending the request to the server
    request.send();
}

getData();