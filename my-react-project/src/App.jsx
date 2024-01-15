import { useState } from "react";
function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [name, setName] = useState("");

    return (
        <>
            <h3>Họ và tên: {name}</h3>
            {isLogged ? (
                <>
                    <span>Chào mừng admin</span>
                    <button
                        onClick={() => {
                            setIsLogged(!isLogged);
                            setName("");
                        }}
                    >
                        Đăng xuất
                    </button>
                </>
            ) : (
                <button
                    onClick={() => {
                        setIsLogged(!isLogged);
                        setName("Lê Trọng Đạt");
                    }}
                >
                    Đăng nhập
                </button>
            )}
        </>
    );
}

export default App;

// javascript module

// Cài đặt extension ES7+ React/Redux/RN/GraphQL/React-Native snippets
// Sử dụng câu lệnh rafce để tạo component

// Cài đặt extension html to jsx để convert HTML sang JSX
