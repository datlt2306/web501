const url = "https://www.w3schools.com/";
// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         callback(null, script);
//     };
//     script.onerror = function () {
//         callback(new Error("Load script fail"));
//     };
//     document.head.append(script);
// }
// loadScript(url, function (error, script) {
//     loadScript("https://code.jquery.com/jquery-3.6.0.min.js", function (error, script) {
//         loadScript(
//             "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js",
//             function (error, script) {}
//         );
//     });
// });

// promise -> Lời hứa
// thành công hoặc thất bại

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.src = src;

        script.onload = function () {
            setTimeout(() => {
                resolve("Gật đầu");
            }, 3000);
        };
        script.onerror = function () {
            reject(new Error("Load script fail"));
        };
        document.head.append(script);
    });
}
loadScript(url)
    .then((data) => "Ôm " + data)
    .then((ketQua2) => ketQua2 + "Dắt tay nhau đi chơi")
    .then((ketQua3) => console.log(ketQua3))
    .catch((error) => console.log(error));
