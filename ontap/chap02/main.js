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

console.log(myAddress["1"]);
console.log(myAddress.run());
