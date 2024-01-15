/* eslint-disable react/prop-types */
function ProductItem({ product }) {
    console.log("product", product);
    return <h1>{product.name}</h1>;
}
export default ProductItem;
