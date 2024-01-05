// function showName(name) {
//     // Kiểm tra
//     if (typeof name != "string") {
//         return false;
//     }
//     // Xử lý
//     const fullName = "Nguyen Van " + name;
//     // Trả về kết quả
//     return fullName;
// }
// showName(0);
// showName("Dat");

// function name -> function tenHam(){}

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 4));

// function expression
// const sum = function (a, b) {
//     return a + b;
// };
// console.log(sum(3, 4));

// arrow function-> Viết tắt của function expression
// const sum = (a, b) => a + b;
// console.log(sum(3, 4));

// IIFE function

(function (a, b) {
    console.log("Hello", a + b);
})(3, 4);
