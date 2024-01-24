import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProductItem({ product }) {
    return (
        <h3>
            {product.name} <Link to={`/products/${product.id}`}>Edit</Link>
        </h3>
    );
}
export default ProductItem;
