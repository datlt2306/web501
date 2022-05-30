async function getProduct() {
    const response = await fetch('http://localhost:3003/products') //truy caapj api, cho no thanh cong thi gan vao bien response
    const data = await response.json(); // chuyển thành dữ liệu json gán nó vào data
    return data;
}
async function render() {
    const result = await getProduct();
    document.getElementById('app').innerHTML = result.map((item) => item.name)
}
//sử dụng nó thì phải có await;
render();