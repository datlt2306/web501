import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
const App = () => {
    const [productList] = useState([
        {
            name: "Samsung",
            price: 200,
            description: "This is a fruit 1",
            image: "https://picsum.photos/200/500",
        }, // item
        {
            name: "Samsung",
            price: 200,
            description: "This is a fruit 1",
            image: "https://picsum.photos/200/500",
        }, // item
    ]);
    return (
        <div className="max-w-6xl mx-auto">
            <Header />
            <main>
                <h2>Sản phẩm mới</h2>

                <div className="grid grid-cols-3 gap-8">
                    {productList.map((item) => {
                        return <ProductItem product={item} key={item.id} />;
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
