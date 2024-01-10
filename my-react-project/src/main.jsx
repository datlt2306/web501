import ReactDOM from "react-dom/client";

const myName = "Le Trong Dat";
const myAge = 20;
const isMarried = true;
const myInfo = {
    name: "Kien",
    age: 30,
};
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <h1>Tên tôi là: {myName}</h1>
        <p>Tuổi: {myAge}</p>
        <p>Tình trạng: {isMarried ? "Đã chết" : "3D"}</p>
        <p>Thông tin: {myInfo.name}</p>
    </>
);
// npm create vite@latest my-react-project -- --template react
