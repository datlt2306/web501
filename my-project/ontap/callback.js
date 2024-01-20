function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    // script => <script src="thuvien.js"></script>
    script.onload = () => callback(null, script);
    script.onerror = () => callback("Lỗi rồi");
    document.head.append(script);
}
loadScript(
    "https://www.loom.com/share/7be32432424248a9ec1b754a389cd737b86f34669d",
    function (error, script) {
        if (error) {
            console.log(error);
        } else {
            console.log(script);
            loadScript("thuhvien2.js", function (error2, script2) {
                if (error2) {
                } else {
                }
            });
        }
    }
);
