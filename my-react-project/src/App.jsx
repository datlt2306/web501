import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductItem from "./components/ProductItem";

function App() {
    const [productList, setProductList] = useState([
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
    ]);
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
            excerpt:
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
            slug: "/how-are-you",
            img: "http://picsum.com/200/200",
        },
        {
            id: 1,
            title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
            excerpt:
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
            slug: "/how-are-you",
            img: "http://picsum.com/200/200",
        },
    ]);
    const [post, setPost] = useState({
        id: 1,
        title: "A UX Case Study on Creating a Studious Environment for Students",
        date: "Posted on 27th January 2021",
        img: "http://picsum.com/200/200",
        description:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    });

    const [status, setStatus] = useState(false);
    return (
        <>
            <div
                style={{ display: status ? "block" : "none" }}
                className="border-2 w-40 h-40 text-white"
            >
                popup bật
            </div>
            <br />
            <button className="inline-block bg-blue-500 p-5" onClick={() => setStatus(true)}>
                Bật
            </button>
            <button className="inline-block bg-red-500 p-5" onClick={() => setStatus(false)}>
                Tắt
            </button>
            <br />
            <div className="max-w-6xl mx-auto">
                <Header />
                <div>
                    <h2 className="font-bold text-2xl">Sản phẩm mới</h2>
                    <div className="grid grid-cols-3 gap-8">
                        {productList.map((product) => {
                            console.log("product", product);
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
