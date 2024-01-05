/**
 *  var | let | const
 *
 * const: khai báo hằng số, không thể thay đổi giá trị
 * let : khai báo biến trong 1 biến có thể thay đổi giá trị
 * Mặc định khai báo tất cả biến sử dụng const
 */

// var a = 10;
// var a = 20;
// var b = 20;
// var c = a + b;
// console.log(c); // 40

// let a = 10;
// a = 20;
// let b = 20;
// let c = a + b;
// console.log(c); // 30

// const a = 10;
// const a = 20;
// const b = 20;
// const c = a + b;
// console.log(c); // 30

// Đặt tên biến
// 1. Tiếng Anh
// 2. Đặt tên danh từ
// 3. Có ý nghĩa

const myName = "Nguyen Van A";
const product = {
    name: "Iphone 12",
    price: 1000,
};
const isMarried = true;
const hasChild = false;

// Đặt tên hàm
// 1. Tiếng Anh
// 2. Đặt tên động từ

function getProductById(id) {}
function removeProductById(id) {}
function setUserPermission(role) {}
function addProduct(product) {}
