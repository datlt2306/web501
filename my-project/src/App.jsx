import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
const App = () => {
    const [productList] = useState([
        {
            id: 1,
            name: "Samsung",
            price: 200,
            description: "This is a fruit 1",
            image: "https://picsum.photos/200/500",
        }, // item
        {
            id: 2,
            name: "Samsung",
            price: 200,
            description: "This is a fruit 1",
            image: "https://picsum.photos/200/500",
        }, // item
    ]);

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});
    const changeStatus = () => {
        setIsLogged(!isLogged);
        setUser({
            name: "Lê Trọng Đạt",
            age: 18,
        });
    };
    return (
        <div className="max-w-6xl mx-auto">
            {isLogged ? (
                <>
                    <span>Xin chào {user.name}</span>
                    <button onClick={changeStatus}>Đăng xuất</button>
                </>
            ) : (
                <button onClick={changeStatus}>Đăng nhập</button>
            )}
            <hr />
            <Header />
            <main>
                <h2>Sản phẩm mới</h2>

                <div className="grid grid-cols-3 gap-8">
                    {productList.map((item, index) => {
                        return <ProductItem product={item} key={index} />;
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
