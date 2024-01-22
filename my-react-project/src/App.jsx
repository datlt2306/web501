import axios from "axios";
import { useEffect, useState } from "react";
function App() {
    const [productsList, setProductsList] = useState([]);
    const [product, setProduct] = useState({});
    const API_URL = "https://6110f09bc38a0900171f0ed0.mockapi.io/products";
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(API_URL, {
                    method: "GET",
                });
                const data = await response.json();
                setProductsList(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    const onHandleInput = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.post(
            "https://6110f09bc38a0900171f0ed0.mockapi.io/products",
            product
        );
        setProductsList([...productsList, data]);
    };
    return (
        <>
            {JSON.stringify(product)}
            <h1>Thêm sản phẩm</h1>
            <form onSubmit={onHandleSubmit}>
                <input type="text" name="name" placeholder="Tên sản phẩm" onInput={onHandleInput} />
                <input
                    type="number"
                    name="price"
                    placeholder="Giá sản phẩm"
                    onInput={onHandleInput}
                />
                <input type="text" name="img" placeholder="Ảnh sản phẩm" onInput={onHandleInput} />
                <button>Thêm</button>
            </form>
            <hr />
            {productsList.map((item, index) => {
                return <div key={index}>{item.name}</div>;
            })}
        </>
    );
}

export default App;
