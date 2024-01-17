// // what?
// // callback -> 1 function được truyền vào 1 function khác như 1 đối số
// // tác dụng của nó là được chạy sau khi có kết quả của tính toán trước đó
// // function tinhThue(tongTien) {
// //     console.log(tongTien + 100);
// // }
// // function sum(a, b, callback) {
// //     const result = a + b;
// //     callback(result);
// // }
// // sum(5, 10, tinhThue);

const url = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js";
function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    // script => <script src="xxx"></script>
    script.onload = function () {
        callback(null, script);
    };
    script.onerror = function () {
        callback("Lỗi rồi");
    };
    document.head.append(script);
}
// setTimeout - 3s
loadScript(url, function (error, script) {
    if (error) {
        console.log(error);
    } else {
        loadScript("thuvien2.js", function (error2, script2) {
            if (error2) {
                console.log(error2);
            } else {
                console.log(script2);
            }
        });
    }
});
// setTimeout - 1s
