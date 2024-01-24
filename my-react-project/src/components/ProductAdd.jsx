import React, { useState } from "react";

const ProductAdd = ({ onAdd }) => {
    const [valueInput, setValueInput] = useState({});
    const onHandleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValueInput({
            ...valueInput,
            [name]: value,
        });
    };

    const onHandleSubmit = (e) => {
        // Dừng sự kiện reload của form
        e.preventDefault();
        onAdd(valueInput);
    };

    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text" name="name" placeholder="Tên" onChange={onHandleChange} />
            <input type="number" name="price" placeholder="Giá" onChange={onHandleChange} />
            <input type="text" name="img" placeholder="Ảnh" onChange={onHandleChange} />
            <button>Thêm</button>
        </form>
    );
};

export default ProductAdd;
