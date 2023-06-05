import Header from "../components/Header";
import { router, useEffect } from "../lib";
const ProductAddPage = () => {
    useEffect(() => {
        const formAddProduct = document.querySelector("#form-add-product");
        if (!formAddProduct) return;
        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const product = {
                name: document.querySelector("#product-name").value,
                price: document.querySelector("#product-price").value,
            };

            fetch(`${import.meta.env.VITE_API_URI}/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }).then(() => {
                alert("Bạn đã thêm sản phẩm thành công");
                setTimeout(() => {
                    router.navigate("/product");
                }, 2000);
            });
        });
    });
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Product Page</h1>
            <form id="form-add-product">
                <input type="text" placeholder="Tên sản phẩm"  id="product-name"/>
                <input type="number" placeholder="Giá sản phẩm"  id="product-price"/>
                <button>Submit</button>
            </form>
                
        </div>
    `;
};
export default ProductAddPage;
