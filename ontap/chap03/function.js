// Function name

const a = "10";
const b = 20;
function sum(a, b) {
    // Kiểm tra
    if (typeof a !== "number" || typeof b !== "number") return false;
    // Xử lý
    const result = a + b;
    // Trả về kết quả
    return result;
}
sum(a, b); // Sử dụng
// ============ Ví dụ 2 ============
const products = ["Áo sơ mi", "Quần jean", "Áo khoác"];
const productElement = document.querySelector("#products");

// hoisting
if (productElement) {
    productElement.innerHTML = showProducts(products);
} else {
    console.log("Không tìm thấy phần tử");
}

function showProducts(data) {
    // kiểm tra
    let result = "";
    if (!Array.isArray(data)) return "Dữ liệu không hợp lệ";
    // xử lý
    for (let i = 0; i < data.length; i++) {
        result += `<li>${data[i]}</li>`;
    }
    // trả về kết quả
    return result;
}

// function expression - const name = function(){}
// const sum2 = function (a, b) {
//     return a + b;
// };
// console.log(sum2(3, 4)); // involked function | excuted

// IIFE function
// (function (a, b) {
//     console.log("Hello", a + b);
// })(3, 4);

// arrow function

const sum2 = (a, b) => a + b;
sum2(3, 4);
