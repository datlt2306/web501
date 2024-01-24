import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import ProductAdd from "./components/ProductAdd";
import { Route, Routes } from "react-router-dom";
import ProductEdit from "./components/ProductEdit";
import axios from "axios";
// React es7+... : gõ câu lệnh rafce để tạo component
// cài đặt extension: html to jsx

function App() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get(
                `https://6110f09bc38a0900171f0ed0.mockapi.io/products`
            );
            setProductList(data);
        };
        getProducts();
    }, []);
    const addProduct = async (product) => {
        const { data } = await axios.post(
            "https://6110f09bc38a0900171f0ed0.mockapi.io/products",
            product
        );
        // rerender
        setProductList([...productList, data]);
    };
    const editProduct = async (product) => {
        const { data } = await axios.put(
            `https://6110f09bc38a0900171f0ed0.mockapi.io/products/${product.id}`,
            product
        );
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
