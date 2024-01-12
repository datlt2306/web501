import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductItem from "./components/ProductItem";

const productList = [
    {
        id: 1,
        name: "Product A",
        price: 200,
        image: "https://picsum.photos/200/200",
    }, // product
    {
        id: 2,
        name: "Product B",
        price: 300,
        image: "https://picsum.photos/200/200",
    }, // product
    {
        id: 3,
        name: "Product C",
        price: 400,
        image: "https://picsum.photos/200/200",
    }, // product
];

function App() {
    return (
        <>
            <div className="max-w-6xl mx-auto">
                <Header />
                <div>
                    <h2 className="font-bold text-2xl">Sản phẩm mới</h2>
                    <div className="grid grid-cols-3 gap-8">
                        {productList.map((product) => {
                            return <ProductItem key={product.id} product={product} />;
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
