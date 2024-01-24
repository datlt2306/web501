import { useEffect, useState } from "react";
import ProductAdd from "./components/ProductAdd";

function App() {
    const [productList, setProductList] = useState([]);

    const API_URL = `https://6110f09bc38a0900171f0ed0.mockapi.io/products`;

    useEffect(() => {
        function getProducts() {
            fetch(API_URL, {
                method: "GET",
            })
                .then((response) => response.json())
                .then((data) => {
                    setProductList(data);
                });
        }
        getProducts();
    }, []);

    function onHandleAdd(product) {
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        }).then(() => {
            alert("Thêm sản phẩm thành công");
        });
    }
    // Xóa sản phẩm
    function deleteProduct() {
        fetch(`${API_URL}/84`, {
            method: "DELETE",
        }).then(() => {
            alert("Xóa sản phẩm thành công");
        });
    }

    // Cập nhật sản phẩm
    function updateProduct() {
        fetch(`${API_URL}/83`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Sản phẩm vừa cập nhật lần 5 WD18333",
                img: "Ảnh",
            }),
        }).then(() => {
            alert("cập nhật sản phẩm thành công");
        });
    }

    return (
        <>
            <h2>Thêm sản phẩm</h2>
            <ProductAdd onAdd={onHandleAdd} />
        </>
    );
}

export default App;

// function display(some) {
//     console.log(some);
// }
// function sum({ a, b, onAdd }) {
//     onAdd(valueInput);
// }

// sum({ a: 5, b: 5, onAdd: display });
