import banner from '@/components/banner';
import Header from '@/components/header';
import data from '@/data';

const ProductDetail = {
    render(id) {
        // Tìm id trong mảng data
        // const product = data.find((item) => item.id === id);
        const product = await (await fetch(`http://localhost:3001/products/${id}`))
            // nếu không có thì return về string not found
        if (!product) return `<div>Not found</div>`;
        // ngược lại nếu có trả về dữ liệu

        return /*html*/ `<div class="container">
                ${Header.render()}
                <div class="banner">${banner.render()}</div>
                <h1>Product Detail</h1>
                <div class="news">
                    ${product.name}
                </div>
                <footer></footer>
            </div>
       `;
    },
};
export default ProductDetail;