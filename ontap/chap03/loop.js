const products = ["Áo sơ mi", "Quần jean", "Áo khoác"];
const productElement = document.querySelector("#products");
let result = "";
// For
// for (let i = 0; i < data.length; i++) {
//     result += `<li>${data[i]}</li>`;
// }

// for...in
// for (let index in products) {
//     result += `<li>${products[index]}</li>`;
// }

// for...of
// for (let item of products) {
//     result += `<li>${item}</li>`;
// }

// forEach
products.forEach(function (item, index) {
    result += `<li>${item} - index ${index}</li>`;
});

//  Chạy
if (productElement) {
    productElement.innerHTML = result;
} else {
    console.log("Không tìm thấy phần tử");
}
