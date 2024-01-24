import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import ProductAdd from "./components/ProductAdd";

// React es7+... : gõ câu lệnh rafce để tạo component
// cài đặt extension: html to jsx

function App() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://6110f09bc38a0900171f0ed0.mockapi.io/products");
            const data = await response.json();
            setProductList(data);
        };
        getProducts();
    }, []);
    const addProduct = async (product) => {
        const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        // rerender
        setProductList([...productList, data]);
    };
    return (
        <div>
            <ProductAdd onAdd={addProduct} />
            <hr />
            {productList.map((product, index) => {
                return <ProductItem key={index} product={product} />;
            })}
            <hr />
        </div>
    );
}

export default App;

// function addProduct(product) {
//     console.log(product);
// }

// function Sum({ a, b, onAdd }) {
//     onAdd(a + b);
// }

// Sum({ a: 5, b: 10, onAdd: addProduct });
