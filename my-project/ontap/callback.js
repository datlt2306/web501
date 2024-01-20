function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback("Lỗi rồi");
    document.head.append(script);
}
// setTimeout(5000)
loadScript("https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif");
