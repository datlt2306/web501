const url = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";
function loadScript(src) {
    return new Promise((resolve, reject) => {
        // Tạo thẻ script
        const script = document.createElement("script");
        // nhúng src vào thẻ script
        script.src = src;
        // script => <script src="xxx.js"></script>
        script.onload = function () {
            resolve(script);
        };
        script.onerror = function () {
            reject("Lỗi rồi");
        };
        document.head.append(script);
    });
}
// loadScript(url)
//     .then((ketQua1) => ketQua1)
//     .then((ketQua2) => console.log(ketQua2))
//     .catch((error) => console.log(error));

async function thucHien() {
    const ketQua1 = await loadScript(url);
    const ketQua2 = (await ketQua1) + "ahihi";
    console.log(ketQua2);
}
thucHien();
