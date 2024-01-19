import { useEffect, useState } from "react";
function App() {
    const [productsList, setProductsList] = useState([]);
    const API_URL = "https://6110f09bc38a0900171f0ed0.mockapi.io/products";
    const dataAddFake = {
        name: "Sản phẩm vừa thêm",
        img: "https://loremflickr.com/640/480/fashion",
    };
    const dataEditFake = {
        name: "Sản phẩm vừa cập nhật",
        img: "https://loremflickr.com/640/480/fashion",
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(API_URL, {
                    method: "GET",
                });
                const data = await response.json();
                setProductsList(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);
    const addProduct = async () => {
        //POST API - body
        try {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataAddFake),
            });

            alert("Thêm sản phẩm thành công");
        } catch (error) {
            console.log(error);
        }
    };
    const updateProduct = async () => {
        //PUT|PATCH API - body
        try {
            await fetch(`${API_URL}/26`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataEditFake),
            });

            alert("Cập nhật sản phẩm thành công");
        } catch (error) {
            console.log(error);
        }
    };
    const deleteProduct = async () => {
        try {
            //DELETE API/id
            await fetch(`${API_URL}/26`, {
                method: "DELETE",
            });

            alert("Xóa sản phẩm thành công");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <button onClick={addProduct}>Thêm</button>
            <button onClick={updateProduct}>Cập nhật</button>
            <button onClick={deleteProduct}>Xóa</button>
            {productsList ? (
                productsList.map((product) => <div key={product.id}>{product.name}</div>)
            ) : (
                <div>Không có sản phẩm nào</div>
            )}
        </>
    );
}

export default App;
