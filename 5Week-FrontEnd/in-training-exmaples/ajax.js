window.onload = function () {
    const URL = "http://localhost:3000/trainers";
    const METHOD = "GET";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("your data is:");
            console.log(xhr.responseText);
        }
    }
    xhr.open(METHOD, URL, true);
    xhr.send();
}