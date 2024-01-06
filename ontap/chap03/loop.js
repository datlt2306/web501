const products = ["A", "B", "C"];
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
// products.forEach((item) => {
//     result += `<li>${item}</li>`;
// });

function showProducts(products) {
    if (!Array.isArray(products)) return false;
    return products.map((item) => `<li>Sản phẩm ${item}</li>`).join("");
}
productElement.innerHTML = showProducts(products);
