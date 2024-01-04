/** Biến */
// var a = 10;
// var a = 20;
// var b = 20;

// var c = a + b;
// console.log(c);

// let a = 10;
// let a = 20;
// let b = 20;
// let c = a + b;
// console.log(c);

// const a = 10;
// a = 20;
// console.log(a);

/**
 * Mặc định sử dụng const để khai báo biến
 * Nếu cần thay đổi giá trị thì sử dụng let
 */

/**
 * Đặt tên biến:
 *  - camelCase
 *  - danh từ
 *  - Nếu số nhiều thì phải có list hoặc thêm s
 * Đặt tên hàm
 *  - camelCase
 *  - động từ
 */

// const productList = [];
// const products = [];
// const users = [];
// const myName = "Lê Trọng Đạt";
// const myAge = 20;
// const isMarried = true;
// const hasChild = false;
// const myInfo = {
//     name: "Lee",
//     age: 20,
// };

// // Khai báo hàm
// function removeProduct() {}
// function setPermission() {}
// function getProduct() {}
// function addProduct() {}

/**
 * Tham chiếu và tham trị
 * shalow copy
 */

const products = [1, 2, 3, 4];

// Spread operator - mảng
const productsClone = [...products];

productsClone.push(5);

console.log("products", products);
console.log("productsClone", productsClone);

// Speard operator - đối tượng

const product = {
    name: "Product A",
};
const productClone = { ...product };

productClone.price = 200;
productClone.address.street = "B";

console.log("product", product);
console.log("productClone", productClone);
