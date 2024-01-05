/**
 * Biến trong javascript
 * var | let | const
 * Mặc định bỏ var sử dụng const để khai báo biến
 * const: hằng số, không thể thay đổi giá trị
 * let: khai báo biến có thể thay đổi giá trị
 */

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
// const b = 20;
// const c = a + b;
// console.log(c);

// const myArr = ["Javascript", "PHP", "Ruby", "Java", "Python"];
// //                0           1       2       3       4
// let result = "";

// for (let i = 0; i < myArr.length; i++) {
//     result = myArr[i] + " ";
// }

/**
 * Kiểu dữ liệu trong javascript và cách đặt tên biến
 * string | number | boolean | object | null | undefined
 */

const myName = "Nguyễn Văn A"; // string
const myAge = 20; // number
const isMarried = true; // boolean
const hasChild = false;
const myChildren = ["A", "B", "C"]; // array
myChildren.push("D");
const myInfo = {
    // object
    name: "Nguyễn Văn A", // property
    age: 20, // property
    isMarried: true,
    children: ["A", "B", "C"],
    run: function () {
        console.log("running");
    },
};

// Tên biến : camelCase, là 1 danh từ, có ý nghĩa
// Tên biến nếu là 1 mảng phải có số nhiều hoặc từ List

// const products = [];
// const productList = [];
// const users = {};

// // tên hàm: là 1 động từ

// function setPermission() {}
// function getPermission() {}
// function removeProductById(id) {}
// function getProductById(slug) {}

const productA = {
    name: "Iphone 12",
};
// Spread Operator: copy giá trị của 1 object
const productB = { ...productA };
productB.price = 200;
console.log({ productA });
console.log({ productB });

// DOM
// Hàm: delcaration function, arrow function, IFFE function
// mảng và các phương thức trong mảng: push, map, filter, include, find, reduce
// object và các phương thức trong object: keys, values, entries
