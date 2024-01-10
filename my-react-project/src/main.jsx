import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const myName = "John";
const myAge = 20;
const isMarried = true;
const myInfo = {
    name: "John",
    age: 20,
    isMarried: true,
};
// jsx - javascript xml
ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="container">
        <h1>Tên tôi là : {myName}</h1>
        <h2>Tuổi: {myAge + 10}</h2>
        <p>Tình trạng: {isMarried ? "Đã chết" : "3D"}</p>
        <p>
            Info: {myInfo.name} - {myInfo.age} - {myInfo.isMarried}
        </p>
    </div>
);
