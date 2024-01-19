const getProducts = async () => {
    const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products");
    const data = await response.json();
    data.map((product) => `<li>${product.name}</li>`).join("");
};
getProducts();

// fake product
const productFake = {
    name: "Product A",
    img: "https://loremflickr.com/cache/resized/65535_53071549535_dd19303026_c_640_480_nofilter.jpg",
};
// ADD PRODUCT
const addProduct = async () => {
    await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products", {
        method: "POST", // PUT - DELETE - GET
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productFake),
    });
};

document.querySelector("#buttonAdd").addEventListener("click", addProduct);
// DELETE
const deleteProduct = async () => {
    await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products/23", {
        method: "DELETE", // PUT - DELETE - GET
    });
    alert("Xóa thành công");
};
document.querySelector("#buttonDelete").addEventListener("click", deleteProduct);

// UPDATE
const updateProduct = async () => {
    const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products/22", {
        method: "PUT", // PUT - DELETE - GET
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productFake),
    });
    const data = await response.json();
    console.log("data", data);
};
document.querySelector("#buttonEdit").addEventListener("click", updateProduct);
