async function fetchProducts() {
    const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products");
    const data = await response.json();
    document.querySelector("#products").innerHTML = data
        .map((item) => `<div>${item.name}</div>`)
        .join("");
}

fetchProducts();

// fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products")
// .then((response) => response.json())
// .then((data) => {
//     document.querySelector("#products").innerHTML = data
//         .map((item) => `<div>${item.name}</div>`)
//         .join("");
// });
