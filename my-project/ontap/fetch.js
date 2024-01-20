const API_URL = "https://6110f09bc38a0900171f0ed0.mockapi.io/products";

function getProducts() {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("#products").innerHTML = data
                .map((item) => `<div>${item.name}</div>`)
                .join("");
        });
}

getProducts();

// Thêm sản phẩm

const dataFake = {
    name: "Product vừa thêm 1",
    img: "https://loremflickr.com/640/480/fashion",
};
function addProduct() {
    fetch(API_URL, {
        method: "POST", // POST | PUT | DELETE | GET
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFake),
    })
        .then(() => {
            alert("Bạn đã thêm thành công");
            location.reload();
        })
        .catch((error) => console.log(error));
}

document.querySelector("#btn-add").addEventListener("click", addProduct);

// Xóa
function deleteProduct() {
    fetch(`${API_URL}/37`, {
        method: "DELETE", // POST | PUT | DELETE | GET
    })
        .then(() => alert("Bạn đã xóa thành công"))
        .catch((error) => console.log(error));
}

document.querySelector("#btn-delete").addEventListener("click", deleteProduct);

// Cập nhật
function updateProduct() {
    fetch(`${API_URL}/37`, {
        method: "PUT", // POST | PUT | DELETE | GET
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Sản phẩm vừa cập nhật",
            img: "ahihi",
        }),
    })
        .then(() => alert("Bạn đã cập nhật thành công"))
        .catch((error) => console.log(error));
}

document.querySelector("#btn-update").addEventListener("click", updateProduct);
