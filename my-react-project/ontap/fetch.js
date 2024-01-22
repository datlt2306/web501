const API_URL = `https://6110f09bc38a0900171f0ed0.mockapi.io/products`;

// Hiển thị danh sách sản phẩm
function renderProducts() {
    fetch(API_URL, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("#products").innerHTML = data
                .map((product) => {
                    return `<div>${product.name}</div>`;
                })
                .join("");
        });
}

function getProducts() {
    renderProducts();
}
getProducts();

//  Thêm sản phẩm

function addProduct() {
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Sản phẩm mới thêm WD18333",
            image: "ahihi",
        }),
    }).then(() => {
        alert("Thêm sản phẩm thành công");
        renderProducts();
    });
}
document.querySelector("#btn-add").addEventListener("click", addProduct);
// Xóa sản phẩm
function deleteProduct() {
    fetch(`${API_URL}/84`, {
        method: "DELETE",
    }).then(() => {
        alert("Xóa sản phẩm thành công");
        renderProducts();
    });
}
document.querySelector("#btn-delete").addEventListener("click", deleteProduct);

// Cập nhật sản phẩm
function updateProduct() {
    fetch(`${API_URL}/83`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Sản phẩm vừa cập nhật WD18333",
            img: "Ảnh",
        }),
    }).then(() => {
        alert("cập nhật sản phẩm thành công");
        renderProducts();
    });
}
document.querySelector("#btn-update").addEventListener("click", updateProduct);
