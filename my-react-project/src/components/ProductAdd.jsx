/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const ProductAdd = ({ onAdd }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        onAdd(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder="Tên sản phẩm" />
            <input type="text" {...register("img")} placeholder="Ảnh sản phẩm" />
            <button>Submit</button>
        </form>
    );
};

export default ProductAdd;
