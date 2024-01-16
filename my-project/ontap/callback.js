function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => callback();
    document.head.append(script);
}

loadScript("thuvien.js"); // the script has "function newFunction()"
newFunction();
