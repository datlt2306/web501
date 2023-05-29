import Header from "../components/Header";
import { products as data } from "../dataFake";
import { useEffect, useState } from "../lib";
const ProductAddPage = () => {
    const [products, setProducts] = useState(data);
    useEffect(() => {
        const formAddProduct = document.querySelector("#form-add-product");
        formAddProduct.addEventListener("submit", function (e) {
            // products.push({ id: 10, name: document.querySelector("#product-name").value });
            setProducts([
                ...products,
                { id: 10, name: document.querySelector("#product-name").value },
            ]);
        });
    });
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Product Page</h1>
            <form id="form-add-product">
                <input type="text" name="name" placeholder="Tên sản phẩm"  id="product-name"/>
                <button>Submit</button>
            </form>
                
        </div>
    `;
};
export default ProductAddPage;
