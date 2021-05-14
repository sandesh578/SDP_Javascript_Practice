const axios = require('axios');

let getData = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5&id=3")
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

let postData = async () => {
    await axios.post("https://jsonplaceholder.typicode.com/todos", {
        name: "Durlav Karki",
        email: "durlav321@gmail.com"
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

let putData = async () => {
    await axios.put("https://jsonplaceholder.typicode.com/todos/1",{
        name: "Durlav Karki",
        email: "durlav321@gmail.com",
        branch:"CSE",
        roll:950
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

let deleteData = async () => {
    await axios.delete("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

getData();
postData();
putData();
deleteData();
getData();
