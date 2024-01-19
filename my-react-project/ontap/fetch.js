const API_URL = "https://6110f09bc38a0900171f0ed0.mockapi.io/products";

// fetch(API_URL)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         document.querySelector("#products").innerHTML = data
//             .map((product) => {
//                 return `<li>${product.name}</li>`;
//             })
//             .join("");
//     })
// .catch((error) => console.log(error));

const getProducts = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
        });
        const data = await response.json();
        document.querySelector("#products").innerHTML = data
            .map((product) => {
                return `<li>${product.name}</li>`;
            })
            .join("");
    } catch (error) {
        console.log(error);
    }
};
getProducts();

// ADD PRODUCT
const dataAddFake = {
    name: "Sản phẩm vừa thêm",
    img: "https://loremflickr.com/640/480/fashion",
};
const dataEditFake = {
    name: "Sản phẩm vừa cập nhật",
    img: "https://loremflickr.com/640/480/fashion",
};
const addProduct = async () => {
    //POST API - body
    try {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataAddFake),
        });

        alert("Thêm sản phẩm thành công");
    } catch (error) {
        console.log(error);
    }
};

document.querySelector("#button-add").onclick = addProduct;

// Xóa sản phẩm
const deleteProduct = async () => {
    try {
        //DELETE API/id
        await fetch(`${API_URL}/23`, {
            method: "DELETE",
        });

        alert("Xóa sản phẩm thành công");
    } catch (error) {
        console.log(error);
    }
};

document.querySelector("#button-delete").onclick = deleteProduct;

// Cập nhật sản phẩm

const updateProduct = async () => {
    //PUT|PATCH API - body
    try {
        await fetch(`${API_URL}/23`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataEditFake),
        });

        alert("Cập nhật sản phẩm thành công");
    } catch (error) {
        console.log(error);
    }
};

document.querySelector("#button-edit").onclick = updateProduct;
