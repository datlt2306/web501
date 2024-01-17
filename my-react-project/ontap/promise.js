function loadScript(src) {
    return new Promise(function (resolve, reject) {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            setTimeout(() => {
                resolve("Gật đầu");
            });
        };
        script.onerror = () => {
            reject("Trả dép bố về");
        };
        document.head.append(script);
    });
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js")
    .then((ketqua1) => ketqua1)
    .then((ketqua1trave) => {
        console.log("ketqua1trave", ketqua1trave);
    });
