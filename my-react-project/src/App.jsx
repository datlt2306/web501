import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductItem from "./components/ProductItem";
function App() {
    return (
        <>
            <ProductItem product={{ name: "Product A", price: 200 }} />
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
