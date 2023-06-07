import Header from "../components/Header";
import { useEffect, useState } from "../lib";
const CategoryPage = ({ id }) => {
    const [category, setCategory] = useState({}); // 1

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URI}/categories/${id}?_embed=products`)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    return ` 
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Category: ${category?.name}</h1>
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
                    ${
                        category.products
                            ? category.products
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
                                  .join("")
                            : "<tr><td colspan='4'>Loading...</td></tr>"
                    }
                    
                </tbody>
            </table>
                
        </div>
    `;
};
export default CategoryPage;
