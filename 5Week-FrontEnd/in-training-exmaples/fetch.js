window.onload = () => {

    fetch("http://localhost:3000/trainers")
        .then(data => data.json())
        .then(data => console.log(data));
}