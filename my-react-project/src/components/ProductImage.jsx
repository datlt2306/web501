/* eslint-disable react/prop-types */

const ProductImage = ({ url, size }) => {
    return <img src={url} alt="" width={size} className="w-full" />;
};

export default ProductImage;
