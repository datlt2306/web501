import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ProductEdit = ({ onEdit }) => {
    // Sử dụng useParams để lấy id trên url
    const { id } = useParams();
    // Sử dụng register và handleSubmit trong hook useForm
    // register để lấy giá trị input
    // handleSubmit để validate
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        // Khi component được render ra thì sẽ lấy được id
        async function getProduct() {
            // lấy ID xong thì gửi lên server để lấy thông tin sản phẩm về
            const { data } = await axios.get(
                `https://6110f09bc38a0900171f0ed0.mockapi.io/products/${id}`
            );
            // có thông tin sản phẩm từ server
            // thì đồng bộ với form thông qua method reset của react hook form
            reset(data);
        }
        getProduct();
    }, [id, reset]);

    // Sau khi submit form thì hàm onSubmit sẽ được gọi
    // Giá trị input được gán vào data, mặc định là 1 object đã cập nhật
    const onSubmit = (data) => {
        // Gửi dữ liệu lên App.js thông qua props onEdit
        onEdit(data);
    };
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
