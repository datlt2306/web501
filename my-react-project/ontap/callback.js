// what?
// callback -> 1 function được truyền vào 1 function khác như 1 đối số
// tác dụng của nó là được chạy sau khi có kết quả của tính toán trước đó
function tinhThue(tongTien) {
    console.log(tongTien + 100);
}
function sum(a, b, callback) {
    const result = a + b;
    callback(result);
}
sum(5, 10, tinhThue);
