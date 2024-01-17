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
const url = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";
function loadScript(src, callback) {
    // Tạo thẻ script
    const script = document.createElement("script");
    // nhúng src vào thẻ script
    script.src = src;
    // script => <script src="xxx.js"></script>
    script.onload = function () {
        callback(script);
    };
    document.head.append(script);
}
loadScript(url, function (script) {
    console.log("Load success", script);
});
