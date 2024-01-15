import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductItem from "./components/ProductItem";

// React es7+... : gõ câu lệnh rafce để tạo component
// cài đặt extension: html to jsx

function App() {
    const [productList] = useState([
        { name: "Product A", price: 200 }, // product
        { name: "Product B", price: 300 }, // product
        { name: "Product C", price: 400 }, // product
    ]);

    const [isLogged, setIsLogged] = useState(false);

    const changeStatus = () => {
        setIsLogged(!isLogged);
    };
    return (
        <div>
            {isLogged ? (
                <>
                    <span>Xin chào admin</span>
                    <button onClick={changeStatus}>Logout</button>
                </>
            ) : (
                <button onClick={changeStatus}>Đăng nhập</button>
            )}
            {productList.map((product) => {
                return <ProductItem key={product.name} product={product} />;
            })}
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
