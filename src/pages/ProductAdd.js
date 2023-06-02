import Header from "../components/Header";
import { products as data } from "../dataFake";
import { useEffect, useState, router } from "../lib";
const ProductAddPage = () => {
    const API_URL = "https://63f5d86059c944921f67a58c.mockapi.io/products";

    useEffect(() => {
        const formAddProduct = document.querySelector("#form-add-product");
        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const product = {
                name: document.querySelector("#product-name").value,
                price: document.querySelector("#product-price").value,
            };

            fetch(API_URL, {
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
