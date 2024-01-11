import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Main from "./componets/Main";
import ProductItem from "./componets/ProductItem";
import ShowName from "./componets/ShowName";

const product = {
    name: "Iphone 12",
    price: 1000,
    color: "red",
    img: "https://picsum.photos/200/200",
    address: {
        city: "HCM",
        district: "1",
    },
};
function App() {
    return (
        <div className="max-w-6xl mx-auto">
            <Header />
            <Main />
            <Footer />
            <hr />
            <h2>Sản phẩm</h2>
            <div className="grid grid-cols-3 gap-8">
                <div className="border-2">
                    <ProductItem product={product} />
                </div>
                <div className="border-2">
                    <ProductItem product={product} />
                </div>
            </div>
        </div>
    );
}

export default App;
