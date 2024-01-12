/* eslint-disable react/prop-types */
import React from "react";
import ProductImage from "./ProductImage";

const ProductItem = ({ product }) => {
    return (
        <div className="shadow rounded">
            {/* product.image => https://picsum.co/200/200 */}
            {/* <img src={product.image} alt="" className="w-full" /> */}
            <ProductImage url={product.image} size={20} />
            <h2 className="text-lg">{product.name}</h2>
            <span>{product.price}</span>
        </div>
    );
};

export default ProductItem;
