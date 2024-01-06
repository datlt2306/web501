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

if (productElement) {
    productElement.innerHTML = showProducts(products);
} else {
    console.log("Không tìm thấy phần tử");
}
