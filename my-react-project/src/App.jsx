import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import ProductAdd from "./components/ProductAdd";
import { Route, Routes } from "react-router-dom";
import ProductEdit from "./components/ProductEdit";
import axios from "axios";
function App() {
    // Tạo 1 state để hiển thị danh sách sản phẩm
    const [productList, setProductList] = useState([]);
    // Sau khi render lần 1 thì gọi vào useEffect
    useEffect(() => {
        const getProducts = async () => {
            // trong useEffect thì call API và trả sản phẩm
            const { data } = await axios.get(
                `https://6110f09bc38a0900171f0ed0.mockapi.io/products`
            );
            // setProducts là dữ liệu call API thành công
            setProductList(data);
        };
        getProducts();
    }, []);
    // Khai báo hàm addProduct và nhận 1 tham số
    // là sản phẩm được thêm từ form
    const addProduct = async (product) => {
        // Gọi API để gửi sản phẩm từ form lên server
        const { data } = await axios.post(
            "https://6110f09bc38a0900171f0ed0.mockapi.io/products",
            product
        );
        // Sau khi thêm trên server thành công
        // thì hiển thị lại danh sách sau khi đã thêm
        setProductList([...productList, data]);
    };
    const editProduct = async (product) => {
        // Gọi API để gửi sản phẩm từ form lên server
        const { data } = await axios.put(
            `https://6110f09bc38a0900171f0ed0.mockapi.io/products/${product.id}`,
            product
        );
        // Sau khi cập nhật trên server thành công
        // thì hiển thị lại danh sách sau khi đã cập nhật
        console.log(data);
    };
    return (
        <div>
            <Routes>
                {/* Nếu truy cập đường dẫn / thì hiển thị ra màn hình nội dung homepage */}
                <Route path="/" element={<h1>Home page</h1>} />
                {/* Nếu truy cập đường dẫn /products thì hiển thị ra màn hình nội dung danh sách sản phẩm */}
                <Route
                    path="products"
                    element={productList.map((product, index) => {
                        return <ProductItem key={index} product={product} />;
                    })}
                />
                {/* Nếu truy cập đường dẫn /products/123 thì hiển thị ra màn hình nội dung form edit sản phẩm */}
                <Route path="products/:id" element={<ProductEdit onEdit={editProduct} />} />
                {/* Nếu truy cập đường dẫn /products/add thì hiển thị ra màn hình nội dung form add sản phẩm */}
                <Route path="products/add" element={<ProductAdd onAdd={addProduct} />} />
                {/* Nếu truy cập đường dẫn không khớp với các đường dẫn đã khai báo
                // thì hiển thị ra màn hình nội dung 404 not found */}
                <Route path="**" element={<h1>404 not found</h1>} />
            </Routes>
        </div>
    );
}

export default App;

// function addProduct(product) {
//     console.log(product);
// }

// function Sum({ a, b, onAdd }) {
//     onAdd(a + b);
// }

// Sum({ a: 5, b: 10, onAdd: addProduct });
