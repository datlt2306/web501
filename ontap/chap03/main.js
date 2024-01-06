/**
 * FUNCTION
 */
// const c = "10";
// const d = 20;

function sum(valueA, valueB) {
    // Kiểm tra
    if (typeof valueA != "number" || typeof valueB != "number") {
        return false;
    }
    // Xử lý
    const result = valueA + valueB;
    // trả về kết quả
    return result;
}
sum(c, d);
// sum(3, 4);
// function sum(a, b) {
//     console.log(a + b);
// }

const sum = function (a, b) {
    console.log(a + b);
};
sum(3, 4); // invoked function | excute function

// IIFE function
// (function (a, b) {
//     console.log(a + b);
// })(3, 4);

// arrow function
