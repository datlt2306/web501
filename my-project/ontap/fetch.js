fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // []
        document.querySelector("#products").innerHTML = data
            .map((product) => `<div>${product.name}</div>`)
            .join("");
    });
