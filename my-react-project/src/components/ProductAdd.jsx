/* eslint-disable react/prop-types */
// import hook useForm từ thư viện react hook form
import { useForm } from "react-hook-form";

const ProductAdd = ({ onAdd }) => {
    // Sử dụng register và handleSubmit trong hook useForm
    // register để lấy giá trị input
    // handleSubmit để validate
    const { register, handleSubmit } = useForm();

    // Sau khi submit form thì hàm onSubmit sẽ được gọi
    // Giá trị input được gán vào data, mặc định là 1 object mới
    const onSubmit = (data) => {
        // Gửi dữ liệu lên App.js thông qua props onAdd
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
