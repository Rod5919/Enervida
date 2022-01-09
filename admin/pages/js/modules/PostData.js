function PostData(api, data, requireds) {
    if (this.validator(data,requireds)){
        console.log(data);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", api, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        alert("Form submitted successfully");
    }
}

PostData.prototype.validator = function(data, requireds) {
    for (const item in requireds) {
        if(data[requireds[item]].length == 0){
            return false;
        }
    }
    return true;
}

export default PostData;