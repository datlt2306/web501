import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import ProductAdd from "./components/ProductAdd";
import { Route, Routes } from "react-router-dom";
import ProductEdit from "./components/ProductEdit";

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
    const editProduct = async (product) => {
        const response = await fetch(
            `https://6110f09bc38a0900171f0ed0.mockapi.io/products/${product.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }
        );
        const data = await response.json();
        // rerender
        console.log(data);
    };
    return (
        <div>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>} />
                <Route
                    path="products"
                    element={productList.map((product, index) => {
                        return <ProductItem key={index} product={product} />;
                    })}
                />
                <Route path="products/:id" element={<ProductEdit onEdit={editProduct} />} />
                <Route path="products/add" element={<ProductAdd onAdd={addProduct} />} />
                <Route path="**" element={<h1>404 not found</h1>} />
            </Routes>
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
