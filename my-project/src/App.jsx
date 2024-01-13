import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Main from "./componets/Main";
import ProductItem from "./componets/ProductItem";

const productList = [
    {
        id: 1,
        name: "Iphone 12",
        price: 1000,
        color: "red",
        img: "https://picsum.photos/200/200",
        address: {
            city: "HCM",
            district: "1",
        },
    }, // product
    {
        id: 2,
        name: "Iphone 13",
        price: 1000,
        color: "red",
        img: "https://picsum.photos/200/200",
        address: {
            city: "HCM",
            district: "1",
        },
    },
    {
        id: 3,
        name: "Iphone 14",
        price: 1000,
        color: "red",
        img: "https://picsum.photos/200/200",
        address: {
            city: "HCM",
            district: "1",
        },
    },
];

function App() {
    return (
        <div className="max-w-6xl mx-auto">
            <Header />
            <Main />
            <Footer />
            <hr />
            <h2>Sản phẩm</h2>
            <div className="grid grid-cols-3 gap-8">
                {productList.map(function (product, index) {
                    return (
                        <div key={index} className="border-2">
                            <ProductItem product={product} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
