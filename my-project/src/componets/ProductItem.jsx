/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ProductImage from "./ProductImage";

const ProductItem = ({ product }) => {
    return (
        <div>
            <div className="product-image">
                <ProductImage img={product.img} />
            </div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.color}</p>
            <p>{product.address.city}</p>
        </div>
    );
};

export default ProductItem;

// destructoring -> phá hủy
