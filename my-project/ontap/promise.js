// function loadScript(src, callback) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback("Lỗi rồi");
//     document.head.append(script);
// }
// // setTimeout(5000)
// loadScript("https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif");

function cauHon() {
    return new Promise(function (resolve, reject) {
        const status = false;
        if (status) {
            setTimeout(() => {
                resolve("Gật đầu");
            }, 3000);
        } else {
            reject("Cút");
        }
    });
}

console.log(cauHon());
