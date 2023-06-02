import Header from "../components/Header";
import { products as data } from "../dataFake";
import { useEffect, useState } from "../lib";
const ProductPage = () => {
    const API_URL = "https://63f5d86059c944921f67a58c.mockapi.io/products";
    const [products, setProducts] = useState([]); // 1

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`${API_URL}/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    setProducts(products.filter((product) => product.id != id));
                });
            });
        }
    });
    // 2
    return ` 
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Product Page</h1>
            <a href="product/add">Thêm</a>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Giá </th>
                        <th>Nội dung</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${products
                        .map(
                            (product, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${product.name}</td>
                                <td>${product.price}</td>
                                <td>${product.description}</td>
                                <td>
                                    <a href="/product/${product.id}/edit">Edit</a>
                                    <button class="btn btn-remove" data-id="${
                                        product.id
                                    }">Remove</button>
                                </td>
                            </tr>
                    `
                        )
                        .join("")}
                    
                </tbody>
            </table>
                
        </div>
    `;
};
export default ProductPage;
