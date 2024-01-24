import React, { useState } from "react";

const ProductAdd = ({ onAdd }) => {
    const [valueInput, setValueInput] = useState({});
    const onHandleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        // valueInput = { name: "Dat", price: 200}

        setValueInput({
            ...valueInput,
            [name]: value,
        });
    };
    const onHandleSubmit = async (e) => {
        e.preventDefault();
        onAdd(valueInput);
    };
    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text" name="name" onInput={onHandleChange} placeholder="Tên sản phẩm" />
            <input type="text" name="img" onInput={onHandleChange} placeholder="Ảnh sản phẩm" />
            <button>Submit</button>
        </form>
    );
};

export default ProductAdd;
