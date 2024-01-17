// function cauHon() {
//     return new Promise(function (resolve, reject) {
//         const status = false;
//         if (status) {
//             setTimeout(function () {
//                 resolve("Gật đầu đồng ý");
//             }, 3000);
//         } else {
//             reject("Không đồng ý");
//         }
//     });
// }
// cauHon()
//     .then((ketQua1) => ketQua1 + " Ôm")
//     .then((ketQua2) => console.log(ketQua2))
//     .catch((ketQuaFail) => ketQuaFail)
//     .then((ketQuaFail2) =>
//         console.log(ketQuaFail2 + " Em chỉ coi anh như là anh trai của em thôi")
//     );

const url = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js";
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => setTimeout(() => resolve(script), 1000);
        script.onerror = () => reject("Lỗi rồi");
        document.head.append(script);
    });
}
// setTimeout - 3s
// loadScript(url)
//     .then((script) => console.log(script))
//     .catch((error) => console.log(error));

// async function thucHien() {
//     const result = await loadScript(url);
//     console.log(result);
// }
// thucHien();
