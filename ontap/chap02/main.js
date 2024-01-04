/* ========= PHÂN BIỆT VAR LET CONST ========*/

// var a = 10;
// var a = 20;
// var b = 20;
// var c = a + b;

// console.log(c);

// let a = 10;
// a = 20;
// let b = 20;
// let c = a + b;

// console.log(c);

// const a = 10;
// a = 20;
// const b = 20;
// const c = a + b;

// console.log(c);
/** 
 - mặc định khai báo biến là sử dụng const
 - khi xác định biến sẽ thay đổi giá trị thì sử dụng let 
*/

/** ========== CÁCH ĐẶT TÊN ========= */
// đặt tên biến
// camelCase
// danh từ

// const productList = [];
// const products = [];
// const myName = "Le Trong";
// const hasChild = true;
// const isMarried = false;

// đặt tên hàm
// Động từ

// function getProducts() {}
// function removeProduct() {}
// function setPermission() {}

/** ========== KIỂU DỮ LIỆU ========= */
const myAge = 10;
const myName = "Le Trong Dat";
const isMarried = true; // boolean
const myChildren = ["Dat", "Dung", "Duc"]; // array
const myAddress = {
    street: "Nguyen Trai",
    city: "Ha Noi",
    run: function () {
        console.log(this.street);
    },
    1: "123",
}; // object

// const Product = {
//     productList: [1, 2, 3, 4],
//     removeProduct: function () {
//         this.productList.splice(0, 1);
//     },
//     addProduct: function () {
//         this.productList.push(5);
//     },
// };

// console.log(myAddress["1"]);
// console.log(myAddress.run());

/** ========== THAM CHIẾU VÀ THAM TRỊ========= */
// tham chiếu -> object, array trỏ đến địa chỉ ô nhớ
// tham trị -> number, string, boolean, null, undefined
// tài liệu: https://javascript.info/object-copy

// Ví dụ 1:
const product1 = {
    name: "Product A",
};
const product2 = { ...product1 };
product2.name = "Product B";
console.log(product1);
console.log(product2);

// Ví dụ 2:
const productList = [1, 2, 3, 4, 5];

const productClone = [...productList];
productClone.push(6);

console.log(productList);
console.log(productClone);
