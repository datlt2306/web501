function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        // script => <script src="thuvien.js"></script>
        script.onload = () => resolve(script);
        script.onerror = () => reject("Lỗi rồi");
        document.head.append(script);
    });
}
loadScript("https://www.loom.com/share/7be32432424248a9ec1b754a389cd737b86f34669d")
    .then((script) => console.log(script))
    .catch((error) => console.log(error));

// function cauHon() {
//     return new Promise(function (resolve, reject) {
//         const status = false;
//         if (status) {
//             setTimeout(function () {
//                 resolve("Gật đầu");
//             }, 3000);
//         } else {
//             reject("Cút");
//         }
//     });
// }
// cauHon()
//     .then((ketQua1) => ketQua1 + " Ôm")
//     .then((ketQua2) => ketQua2 + " Hôn")
//     .then((ketQua3) => console.log(`${ketQua3}, về nhà để nghỉ`))
//     .catch((error) => console.log(error))
//     .then(() => console.log(`Đóng thùng xốp`));
