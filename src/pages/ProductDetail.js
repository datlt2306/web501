import { useEffect, useState } from "../lib";

const ProductDetail = ({ id }) => {
    const [product, setProduct] = useState({}); // 1
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URI}/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, []);
    return `
        ${product?.name}
    `;
};
export default ProductDetail;

/**
 * id: number
 * title: string
 * description: string
 * time: date() ( thời gian làm dự án)
 * skills: string[] (HTML/CSS/JS)
 * image: string
 * repository: string ( đường link đên github của bạn)
 * url: string ( đường link đến trang web của bạn )
 * role: string (frontend/backend/fullstack)
 */
