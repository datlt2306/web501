/* eslint-disable react/prop-types */
import ProductImage from "./ProductImage";

const ProductItem = ({ product }) => {
    return (
        <div className="shadow rounded">
            <ProductImage url={product.image} size={20} />
            <h2 className="text-lg">{product.name}</h2>
            <span>{product.price}</span>
        </div>
    );
};

export default ProductItem;
