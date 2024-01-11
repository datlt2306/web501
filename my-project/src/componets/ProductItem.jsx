import React from "react";

const ProductItem = (props) => {
    console.log(props); // { name: '', price: xxx}
    return (
        <div>
            <div className="product-image">
                <img src={props.product.img} />
            </div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price}</p>
            <p>{props.product.color}</p>
            <p>{props.product.address.city}</p>
        </div>
    );
};

export default ProductItem;
