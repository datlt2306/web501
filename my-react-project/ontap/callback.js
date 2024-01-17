// function total(a, b, callback) {
//     const result = a + b;
//     callback(result);
// }

// total(5, 10, function (some) {
//     console.log(some);
// });

// const button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     console.log('Button clicked');
// })
function loadScript(src, callback) {
    // Tạo thẻ script
    const script = document.createElement("script");
    // nhúng src vào thẻ script
    script.src = src;
    // script => <script src="xxx.js"></script>
    script.onload = function () {
        callback(null, script);
    };
    script.onerror = function () {
        callback("Lỗi rồi");
    };
    document.head.append(script);
}
loadScript("url");
