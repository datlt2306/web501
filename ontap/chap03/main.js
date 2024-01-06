/**
 * FUNCTION
 */
const c = "10";
const d = 20;

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
