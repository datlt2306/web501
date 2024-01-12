import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductItem from "./components/ProductItem";

// React es7+... : gõ câu lệnh rafce để tạo component
// cài đặt extension: html to jsx

function App() {
    return (
        <div>
            <ProductItem product={{ name: "Product A", price: 200 }} />
            <ProductItem product={{ name: "Product B", price: 300 }} />
            <ProductItem product={{ name: "Product C", price: 400 }} />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
