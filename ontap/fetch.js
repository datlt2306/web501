const API_URL = "https://63f5d86059c944921f67a58c.mockapi.io/products";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => console.log(data));
