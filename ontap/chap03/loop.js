const products = ["Sản phẩm A", "Sản phẩm B", "Sản phẩm C"];
const productElement = document.querySelector("#products");

let result = "";

// For
// for (let i = 0; i < products.length; i++) {
//     result += `<li>${products[i]}</li>`;
// }

// for..in
// for (let i in products) {
//     result += `<li>${products[i]}</li>`;
// }

// for..of
// for (let item of products) {
//     result += `<li>${item}</li>`;
// }

// forEach
products.forEach((item) => {
    result += `<li>${item}</li>`;
});

productElement.innerHTML = result;
