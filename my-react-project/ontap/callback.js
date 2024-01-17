function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback("Lỗi rồi");
    document.head.append(script);
}
loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodashhhhhh.js",
    (error, script) => {
        if (error) {
            console.log(error);
        } else {
            console.log(script);
        }
    }
);

// const myArr = [10,20,30];

// myArr.map(function(item) => {

// })
