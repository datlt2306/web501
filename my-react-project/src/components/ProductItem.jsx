/* eslint-disable react/prop-types */
import React from "react";

const ProductItem = (props) => {
    console.log(props);
    return (
        <div className="shadow rounded">
            <img src={props.product.image} alt="" className="w-full" />
            <h2 className="text-lg">{props.product.name}</h2>
            <span>{props.product.price}</span>
        </div>
    );
};

export default ProductItem;
