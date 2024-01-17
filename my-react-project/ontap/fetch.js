const productElement = document.querySelector("#products");
fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products")
    .then((response) => response.json())
    .then((data) => {
        productElement.innerHTML = data.map((product) => `<li>${product.name}</li>`).join("");
    });
