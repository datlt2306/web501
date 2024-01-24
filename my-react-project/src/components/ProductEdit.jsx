import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ProductEdit = ({ onEdit }) => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        function getProduct() {
            fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${id}`)
                .then((response) => response.json())
                .then((data) => reset(data));
        }
        getProduct();
    }, []);

    const onSubmit = (data) => onEdit(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="Tên sản phẩm" />
                <input type="text" {...register("img")} placeholder="Ảnh sản phẩm" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductEdit;
