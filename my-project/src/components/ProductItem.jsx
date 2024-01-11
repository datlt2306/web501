/* eslint-disable react/prop-types */
import React from "react";

const ProductItem = (props) => {
    return (
        <div className="border shadow rounded">
            <div className="mb-2">
                <img src={`${props.product.image}`} className="w-full" />
            </div>
            <h3 className="mt-5 text-2xl">{props.product.name}</h3>
            <span>{props.product.price}</span>
            <p>{props.product.description}</p>
        </div>
    );
};
export default ProductItem;
