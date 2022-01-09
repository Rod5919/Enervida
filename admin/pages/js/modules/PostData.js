function PostData(api, data) {
    console.log(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", api, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

export default PostData;