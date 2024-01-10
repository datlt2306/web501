import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const myName = "LE Trong Dat";
const myAge = 20;
const isMarried = true;
const myInfo = {
    name: "Dat",
    age: 20,
};
// JSX - Javascript XML
ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <p>Tên tôi là {myName}</p>
        <p>Tuổi {myAge + 10}</p>
        <p>Tình trạng: {isMarried ? "Đã chết" : "3D"}</p>
        <p>Thông tin: {myInfo.name}</p>
    </div>
);
// npm create vite@latest my-react-project -- --template react
