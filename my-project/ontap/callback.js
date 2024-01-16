function loadScript(src, callback) {
    // Tạo ra 1 thẻ script
    const script = document.createElement("script");
    // nhúng thư viện vào thuộc tính src của thẻ script
    script.src = src;
    script.onload = () => callback();
    // thêm thẻ script vào trong thẻ head của trang web
    document.head.append(script);
}
loadScript("thuvien.js", function () {
    newFunction();
});
// newFunction là một hàm thuộc thuvien.js
