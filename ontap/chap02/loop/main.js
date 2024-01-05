const productList = ["San phẩm A", "Sản phẩm B", "Sản phẩm C"];
//                       0             1            2
const productElement = document.getElementById("products");

let result = "";
// for loop
// for (let i = 0; i < productList.length; i++) {
//     result += `<li>${productList[i]}</li>`;
// }

// for...in
// for (let i in productList) {
//     result += `<li>${productList[i]}</li>`;
// }

// for...of
// for (let product of productList) {
//     result += `<li>Nane: ${product}</li>`;
// }

// forEach
productList.forEach(function (product, index) {
    result += `<li>name: ${product}, index: ${index}</li>`;
});

productElement.innerHTML = result;
