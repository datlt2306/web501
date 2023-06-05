import Header from "../components/Header";
import { products as data } from "../dataFake";
import { useEffect, useState, router } from "../lib";
import joi from "joi";
const productSchema = joi.object({
    name: joi.string().required().min(3).max(30),
    price: joi.number().required(),
});
const ProductEditPage = ({ id }) => {
    const API_URL = "https://63f5d86059c944921f67a58c.mockapi.io/products";
    const [product, setProduct] = useState({});

    // lấy ra thông tin sản phẩm để hiển thị form
    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    // cập nhật sản phẩm
    useEffect(() => {
        const formAddProduct = document.querySelector("#form-edit-product");
        const errorsElement = document.querySelector("#errors");

        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const formData = {
                name: document.querySelector("#product-name").value,
                price: document.querySelector("#product-price").value,
            };
            const { error } = productSchema.validate(formData, { abortEarly: false });
            if (error) {
                const errors = error.details.map((err) => err.message);
                errorsElement.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
                return;
            }
            fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => {
                alert("Bạn đã cập nhật sản phẩm thành công");
            });
        });
    });

    if (!product) return "Product not found";
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Product Page</h1>
            <div id="errors"></div>
            <form id="form-edit-product">
                <input type="text" placeholder="Tên sản phẩm"  id="product-name" value="${
                    product.name
                }"/>
                <input type="number" placeholder="Giá sản phẩm"  id="product-price" value="${
                    product.price
                }"/>
                <button>Submit</button>
            </form>
                
        </div>
    `;
};
export default ProductEditPage;


