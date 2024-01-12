import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductItem from "./components/ProductItem";

function App() {
    return (
        <>
            <div className="max-w-6xl mx-auto">
                <Header />
                <div>
                    <h2 className="font-bold text-2xl">Sản phẩm mới</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <ProductItem
                            product={{
                                name: "Product A",
                                price: 200,
                                image: "https://picsum.photos/200/200",
                            }}
                        />
                        <ProductItem
                            product={{
                                name: "Product B",
                                price: 200,
                                image: "https://picsum.photos/200/200",
                            }}
                        />
                        <ProductItem
                            product={{
                                name: "Product C",
                                price: 200,
                                image: "https://picsum.photos/200/200",
                            }}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
