import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
const App = () => {
    const API_URL = "https://6110f09bc38a0900171f0ed0.mockapi.io/products";
    const dataFake = {
        name: "Product vừa thêm 1",
        img: "https://loremflickr.com/640/480/fashion",
    };
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        function getProducts() {
            fetch(API_URL)
                .then((response) => response.json())
                .then((data) => {
                    setProductList(data);
                });
        }

        getProducts();
    }, []);

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
    function deleteProduct() {
        fetch(`${API_URL}/40`, {
            method: "DELETE", // POST | PUT | DELETE | GET
        })
            .then(() => alert("Bạn đã xóa thành công"))
            .catch((error) => console.log(error));
    }
    function updateProduct() {
        fetch(`${API_URL}/40`, {
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
    return (
        <div className="max-w-6xl mx-auto">
            <main>
                <h2>Sản phẩm mới</h2>
                <button onClick={addProduct}>Thêm</button>
                <button onClick={deleteProduct}>Xóa</button>
                <button onClick={updateProduct}>Cập nhật</button>
                <div className="grid grid-cols-3 gap-8">
                    {productList.map((item, index) => {
                        return <ProductItem product={item} key={index} />;
                    })}
                </div>
            </main>
        </div>
    );
};

export default App;
