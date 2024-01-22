import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";

// React es7+... : gõ câu lệnh rafce để tạo component
// cài đặt extension: html to jsx

function App() {
    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products");
            const data = await response.json();
            setProductList(data);
        };
        getProducts();
    }, []);
    const addProduct = async () => {};
    // DELETE
    const deleteProduct = async () => {
        await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products/23", {
            method: "DELETE", // PUT - DELETE - GET
        });
    };
    // UPDATE
    const updateProduct = async () => {
        await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products/22", {
            method: "PUT", // PUT - DELETE - GET
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productFakeUpdate),
        });
    };
    const onHandleChange = (e) => {
        const target = e.target;
        const name = target.name;
        setProduct({
            ...product,
            [name]: target.value,
        });
    };
    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        // reRender
        setProductList([...productList, data]);
    };
    return (
        <div>
            {JSON.stringify(product)}
            <form onSubmit={onHandleSubmit}>
                <input
                    type="text"
                    name="name"
                    onInput={onHandleChange}
                    placeholder="Tên sản phẩm"
                />
                <input type="text" name="img" onInput={onHandleChange} placeholder="Ảnh sản phẩm" />
                <button>Submit</button>
            </form>
            <hr />
            {productList.map((product) => {
                return <ProductItem key={product.id} product={product} />;
            })}
            <hr />
        </div>
    );
}

export default App;
