import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductItem from "./components/ProductItem";

const App = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Header />
            <main>
                <h2>Sản phẩm mới</h2>
                <div className="grid grid-cols-3 gap-8">
                    <ProductItem
                        product={{
                            name: "Apple",
                            price: 100,
                            description: "This is a fruit 3",
                            image: "https://picsum.photos/200/300",
                        }}
                    />
                    <ProductItem
                        product={{
                            name: "Samsung",
                            price: 200,
                            description: "This is a fruit 1",
                            image: "https://picsum.photos/200/500",
                        }}
                    />
                    <ProductItem
                        product={{
                            name: "Xiaomi",
                            price: 300,
                            description: "This is a fruit 2",
                            image: "https://picsum.photos/400/300",
                        }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
