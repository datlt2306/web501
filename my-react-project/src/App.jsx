import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductItem from "./components/ProductItem";

const productList = [
    { id: 1, name: "Product A", price: 200 }, // product
    { id: 2, name: "Product B", price: 300 },
    { id: 3, name: "Product C", price: 400 },
];
function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [name, setName] = useState("");

    const onChangeStatus = () => {
        setIsLogged(!isLogged);
        setName("Lê Trọng Đạt");
    };
    return (
        <>
            {isLogged ? (
                <>
                    <span>Chào mừng {name}</span>
                    <button onClick={onChangeStatus}>Đăng xuất</button>
                </>
            ) : (
                <button onClick={onChangeStatus}>Đăng nhập</button>
            )}
            {productList.map((product) => {
                return <ProductItem product={product} key={product.id} />;
            })}
            <div className="container">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default App;

// javascript module

// Cài đặt extension ES7+ React/Redux/RN/GraphQL/React-Native snippets
// Sử dụng câu lệnh rafce để tạo component

// Cài đặt extension html to jsx để convert HTML sang JSX
