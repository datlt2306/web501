function loadScript(src, callback) {
    // tạo 1 thẻ script
    const script = document.createElement("script");
    // nhúng giá trị của src vào thuộc tính src của thẻ script
    script.src = src;
    script.onload = function () {
        callback();
    };
    // nhúng cả script vào thẻ head
    document.head.append(script);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", function () {
    console.log("loaded script done!");
});
